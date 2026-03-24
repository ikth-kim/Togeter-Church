import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu } from 'lucide-react';

import { logout } from '@/lib/auth-actions';
import { getCurrentUser } from '@/lib/auth';
import { aboutSections } from '@/components/about/aboutSections';
import { communitySections } from '@/components/community/community';
import { siteAssets } from '@/lib/site';

const secondaryNavItems = [
  { href: '/new-family', label: '새가족등록' },
  { href: '/sermons', label: '예배' },
  { href: '/news', label: '교회소식' },
];

export default async function Navbar() {
  const currentUser = await getCurrentUser();

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 border-b bg-white/88 shadow-sm backdrop-blur-md"
      style={{ borderColor: '#EEE4D7' }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <div
            className="relative h-10 w-10 overflow-hidden rounded-2xl border bg-white"
            style={{ borderColor: '#EEE4D7' }}
          >
            <Image
              src={siteAssets.togetherLogo}
              alt="함께가는교회 로고"
              fill
              sizes="40px"
              className="object-contain p-1.5"
            />
          </div>
          <span
            className="text-lg font-bold"
            style={{ color: '#1E1B4B', fontFamily: 'Outfit, sans-serif' }}
          >
            함께가는교회
          </span>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center md:flex">
          <ul className="ml-8 flex min-w-0 items-center gap-1">
            <li className="relative">
              <details name="desktop-nav" className="group">
                <summary
                  className="inline-flex cursor-pointer list-none items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 [&::-webkit-details-marker]:hidden"
                  style={{ color: '#475569' }}
                >
                  <span>교회소개</span>
                  <ChevronDown size={14} className="transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div
                  className="absolute left-0 top-full z-50 mt-2 w-52 rounded-2xl border bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                  style={{ borderColor: '#EEE4D7' }}
                >
                  {aboutSections.map(section => (
                    <Link
                      key={section.href}
                      href={section.href}
                      className="block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-200"
                      style={{ color: '#475569' }}
                    >
                      {section.label}
                    </Link>
                  ))}
                </div>
              </details>
            </li>

            {secondaryNavItems.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200"
                  style={{ color: '#475569' }}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="relative">
              <details name="desktop-nav" className="group">
                <summary
                  className="inline-flex cursor-pointer list-none items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 [&::-webkit-details-marker]:hidden"
                  style={{ color: '#475569' }}
                >
                  <span>커뮤니티</span>
                  <ChevronDown size={14} className="transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div
                  className="absolute left-0 top-full z-50 mt-2 w-52 rounded-2xl border bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                  style={{ borderColor: '#EEE4D7' }}
                >
                  {communitySections.map(section => (
                    <Link
                      key={section.href}
                      href={section.href}
                      className="block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-200"
                      style={{ color: '#475569' }}
                    >
                      {section.label}
                    </Link>
                  ))}
                </div>
              </details>
            </li>
          </ul>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            {currentUser ? (
              <>
                {currentUser.role === 'admin' ? (
                  <Link
                    href="/admin"
                    className="rounded-xl border px-4 py-2 text-sm font-semibold transition-colors duration-200"
                    style={{
                      borderColor: '#D9C7B1',
                      color: '#8B5E34',
                      backgroundColor: '#FFF8F1',
                    }}
                  >
                    관리자
                  </Link>
                ) : null}
                <span
                  className="max-w-32 truncate rounded-xl px-4 py-2 text-sm font-semibold"
                  style={{ color: '#6B7280', backgroundColor: '#F8F4EE' }}
                  title={currentUser.name}
                >
                  {currentUser.name}
                </span>
                <form action={logout}>
                  <button
                    type="submit"
                    className="cursor-pointer rounded-xl px-4 py-2 text-sm font-semibold text-white transition-colors duration-200"
                    style={{ backgroundColor: '#8B5E34' }}
                  >
                    로그아웃
                  </button>
                </form>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-xl border px-4 py-2 text-sm font-semibold transition-colors duration-200"
                  style={{
                    borderColor: '#E7D8C8',
                    color: '#6B7280',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  로그인
                </Link>
                <Link
                  href="/signup"
                  className="rounded-xl px-4 py-2 text-sm font-semibold text-white transition-colors duration-200"
                  style={{ backgroundColor: '#8B5E34' }}
                >
                  회원가입
                </Link>
              </>
            )}
          </div>
        </div>

        <details className="relative ml-auto md:hidden">
          <summary
            className="list-none rounded-lg p-2 transition-colors duration-200 [&::-webkit-details-marker]:hidden"
            style={{ color: '#475569' }}
          >
            <Menu size={22} />
          </summary>

          <div
            className="fixed left-0 right-0 top-16 border-t bg-white px-4 pb-4"
            style={{ borderColor: '#EEE4D7' }}
          >
            <ul className="flex flex-col gap-1 pt-2">
              <li className="rounded-xl">
                <details name="mobile-nav" className="group">
                  <summary
                    className="flex cursor-pointer list-none items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium [&::-webkit-details-marker]:hidden"
                    style={{ color: '#475569' }}
                  >
                    <span>교회소개</span>
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <div className="px-2 pb-2">
                    {aboutSections.map(section => (
                      <Link
                        key={section.href}
                        href={section.href}
                        className="block rounded-lg px-3 py-2.5 text-sm transition-colors duration-200"
                        style={{ color: '#475569' }}
                      >
                        {section.label}
                      </Link>
                    ))}
                  </div>
                </details>
              </li>

              {secondaryNavItems.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200"
                    style={{ color: '#475569' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li className="rounded-xl">
                <details name="mobile-nav" className="group">
                  <summary
                    className="flex cursor-pointer list-none items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium [&::-webkit-details-marker]:hidden"
                    style={{ color: '#475569' }}
                  >
                    <span>커뮤니티</span>
                    <ChevronDown
                      size={16}
                      className="transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <div className="px-2 pb-2">
                    {communitySections.map(section => (
                      <Link
                        key={section.href}
                        href={section.href}
                        className="block rounded-lg px-3 py-2.5 text-sm transition-colors duration-200"
                        style={{ color: '#475569' }}
                      >
                        {section.label}
                      </Link>
                    ))}
                  </div>
                </details>
              </li>
            </ul>

            {currentUser ? (
              <div className="mt-4 space-y-2 border-t pt-4" style={{ borderColor: '#EEE4D7' }}>
                <div
                  className="rounded-xl px-4 py-3 text-center text-sm font-semibold"
                  style={{ color: '#6B7280', backgroundColor: '#F8F4EE' }}
                >
                  {currentUser.name}
                </div>
                {currentUser.role === 'admin' ? (
                  <Link
                    href="/admin"
                    className="block rounded-xl border px-4 py-3 text-center text-sm font-semibold transition-colors duration-200"
                    style={{
                      borderColor: '#D9C7B1',
                      color: '#8B5E34',
                      backgroundColor: '#FFF8F1',
                    }}
                  >
                    관리자
                  </Link>
                ) : null}
              <form action={logout}>
                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-xl px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-200"
                  style={{ backgroundColor: '#8B5E34' }}
                >
                  로그아웃
                </button>
              </form>
              </div>
            ) : (
              <div
                className="mt-4 grid grid-cols-2 gap-2 border-t pt-4"
                style={{ borderColor: '#EEE4D7' }}
              >
                <Link
                  href="/login"
                  className="rounded-xl border px-4 py-3 text-center text-sm font-semibold transition-colors duration-200"
                  style={{
                    borderColor: '#E7D8C8',
                    color: '#6B7280',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  로그인
                </Link>
                <Link
                  href="/signup"
                  className="rounded-xl px-4 py-3 text-center text-sm font-semibold text-white transition-colors duration-200"
                  style={{ backgroundColor: '#8B5E34' }}
                >
                  회원가입
                </Link>
              </div>
            )}
          </div>
        </details>
      </nav>
    </header>
  );
}
