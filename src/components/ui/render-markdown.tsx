import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Image from 'next/image'
import type { Blog } from '@prisma/client'

type RenderMarkdownProps = {
    data: Blog
}

export const RenderMarkdown = ({ data }: RenderMarkdownProps) => {
    return (
        <div className='flex flex-col gap-16 px-5'>
            <Image
                src={data.image}
                alt={data.title}
                width={500}
                height={300}
                className='mx-auto h-full w-full max-w-4xl rounded-md object-cover'
            />
            <ReactMarkdown
                className={
                    'prose sm:prose-base prose-sm prose-invert mx-auto max-w-4xl'
                }
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ node, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return match ? (
                            <SyntaxHighlighter
                                style={dark}
                                language={match[1]}
                                PreTag='div'
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code {...props} className={className}>
                                {children}
                            </code>
                        )
                    },
                }}
            >
                {`# ${data.title}\n\n${data.content}` ?? ''}
            </ReactMarkdown>
        </div>
    )
}
