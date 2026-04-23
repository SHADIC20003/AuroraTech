// Legacy URL: real page lives under [locale]. Avoids rendering without NextIntlClientProvider.
import { permanentRedirect } from 'next/navigation'

export default function LegacyAboutUsPage() {
    permanentRedirect('/en/about-us')
}
