import { permanentRedirect } from 'next/navigation'

export default function LegacyServicesPage() {
    permanentRedirect('/en/services')
}
