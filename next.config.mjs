import createNextIntlPlugin from "next-intl/plugin";

const WithNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default WithNextIntl(nextConfig);
