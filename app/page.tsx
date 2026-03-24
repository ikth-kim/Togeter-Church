import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Bell, ChevronRight, Clock, Heart, MapPin, MessageCircle, Sparkles } from 'lucide-react';

import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import Navbar from '@/components/Navbar';
import {
  getAnnouncements,
  getChurchProfile,
  getPosts,
  getWorshipSchedule,
} from '@/lib/data';
import {
  coreValues,
  firstVisitPoints,
  siteAssets,
  worshipHighlights as defaultWorshipHighlights,
} from '@/lib/site';

export default function HomePage() {
  const announcements = getAnnouncements().slice(0, 3);
  const posts = getPosts().slice(0, 4);
  const churchProfile = getChurchProfile();
  const schedule = getWorshipSchedule();
  const worshipHighlights =
    schedule
      .flatMap(section =>
        section.services.map(service => ({
          label: service.name,
          time: service.time,
          note: service.note || section.day,
        })),
      )
      .slice(0, 4) || [];
  const visibleWorshipHighlights =
    worshipHighlights.length > 0 ? worshipHighlights : defaultWorshipHighlights;

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSlider />

        <section className="border-b" style={{ backgroundColor: '#FFFDFC', borderColor: '#EEE4D7' }}>
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {visibleWorshipHighlights.map(item => (
                <div
                  key={item.label}
                  className="rounded-2xl border p-4"
                  style={{ backgroundColor: '#FFFFFF', borderColor: '#EEE4D7' }}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: '#F5EBDD', color: '#8B5E34' }}
                    >
                      <Clock size={18} />
                    </div>
                    <p className="text-xs font-semibold" style={{ color: '#8B5E34' }}>
                      {item.label}
                    </p>
                  </div>
                  <p className="text-xl font-bold" style={{ color: '#1E1B4B' }}>
                    {item.time}
                  </p>
                  <p className="mt-1 text-xs leading-5" style={{ color: '#6B7280' }}>
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-18 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <span
                className="inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase"
                style={{ backgroundColor: '#F5EBDD', color: '#8B5E34' }}
              >
                {churchProfile.slogan}
              </span>
              <h2 className="mt-5 text-3xl font-bold md:text-5xl" style={{ color: '#1E1B4B', lineHeight: 1.15 }}>
                처음 와도 편안한,
                <br />
                밝고 따뜻한 예배 공동체
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 md:text-base" style={{ color: '#5F6570' }}>
                함께가는교회는 과하게 무겁지 않으면서도 예배의 중심은 분명하게 지키는 공동체를 지향합니다.
                청년과 학생, 가족이 함께 머물 수 있는 차분한 공간과 환대의 분위기를 홈페이지에서도 그대로 느낄 수 있도록 구성했습니다.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {firstVisitPoints.map(point => (
                  <div
                    key={point.title}
                    className="rounded-2xl border p-4"
                    style={{ backgroundColor: '#FFFCF8', borderColor: '#EEE4D7' }}
                  >
                    <p className="text-sm font-semibold" style={{ color: '#1E1B4B' }}>
                      {point.title}
                    </p>
                    <p className="mt-2 text-xs leading-5" style={{ color: '#6B7280' }}>
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-200"
                  style={{ backgroundColor: '#8B5E34', color: '#FFFFFF' }}
                >
                  교회 소개 보기
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/worship"
                  className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-colors duration-200"
                  style={{ borderColor: '#D9C7B1', color: '#8B5E34', backgroundColor: '#FFF8F1' }}
                >
                  예배 시간 확인
                </Link>
                <Link
                  href="/new-family"
                  className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-colors duration-200"
                  style={{ borderColor: '#D9C7B1', color: '#8B5E34', backgroundColor: '#FFFFFF' }}
                >
                  새가족 등록
                </Link>
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute -left-4 top-6 h-24 w-24 rounded-full blur-2xl"
                style={{ backgroundColor: 'rgba(196, 144, 91, 0.18)' }}
              />
              <div
                className="relative overflow-hidden rounded-[2rem] border bg-white shadow-[0_18px_50px_rgba(44,31,20,0.08)]"
                style={{ borderColor: '#EEE4D7' }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={siteAssets.sanctuaryPhoto}
                    alt="함께가는교회 예배 공간"
                    fill
                    preload
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div
                className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border bg-white/92 p-4 backdrop-blur-sm"
                style={{ borderColor: '#EEE4D7' }}
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border bg-white" style={{ borderColor: '#EEE4D7' }}>
                    <Image
                      src={siteAssets.togetherLogo}
                      alt="함께가는교회 로고"
                      fill
                      sizes="56px"
                      className="object-contain p-1.5"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#1E1B4B' }}>
                      함께가는교회
                    </p>
                    <p className="mt-1 text-xs leading-5" style={{ color: '#6B7280' }}>
                      실제 예배 공간 사진을 메인 비주얼에 반영해 첫 방문자도 분위기를 미리 느낄 수 있게 했습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#FBF8F4' }}>
          <div className="max-w-6xl mx-auto px-4 py-18 md:py-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#8B5E34' }}>
                <Sparkles size={16} />
                핵심 가치
              </div>
              <h2 className="mt-3 text-2xl font-bold md:text-4xl" style={{ color: '#1E1B4B' }}>
                따뜻하지만 가볍지 않게,
                <br />
                지금의 감각으로 정리한 교회 소개
              </h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {coreValues.map((value, index) => (
                <div
                  key={value.title}
                  className="rounded-[1.75rem] border p-6"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: '#EEE4D7',
                    boxShadow: '0 18px 40px rgba(57, 43, 31, 0.04)',
                  }}
                >
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-bold"
                    style={{ backgroundColor: '#F5EBDD', color: '#8B5E34' }}
                  >
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-bold" style={{ color: '#1E1B4B' }}>
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7" style={{ color: '#5F6570' }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-18 md:py-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Bell size={20} style={{ color: '#8B5E34' }} />
              <h2 className="text-xl font-bold" style={{ color: '#1E1B4B' }}>교회 소식</h2>
            </div>
            <Link href="/news" className="flex items-center gap-1 text-sm font-medium transition-colors duration-200" style={{ color: '#8B5E34' }}>
              전체 보기 <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {announcements.map(a => (
              <Link
                key={a.id}
                href="/news"
                className="block rounded-2xl border bg-white p-5 transition-all duration-200 hover:shadow-md"
                style={{ borderColor: '#EEE4D7', boxShadow: '0 14px 34px rgba(57, 43, 31, 0.04)' }}
              >
                <div className="mb-3 flex gap-2">
                  <span className="inline-block rounded-full px-2.5 py-1 text-xs font-medium" style={{ backgroundColor: '#F5EBDD', color: '#8B5E34' }}>
                    {a.category}
                  </span>
                  {a.pinned && (
                    <span className="inline-block rounded-full px-2.5 py-1 text-xs font-medium" style={{ backgroundColor: '#FEF3C7', color: '#A16207' }}>
                      고정
                    </span>
                  )}
                </div>
                <h3 className="mb-2 line-clamp-2 text-sm font-semibold" style={{ color: '#1E1B4B' }}>{a.title}</h3>
                <p className="mb-3 line-clamp-2 text-xs" style={{ color: '#64748B' }}>{a.content}</p>
                <time className="text-xs" style={{ color: '#94A3B8' }}>{a.date}</time>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-18 md:py-20" style={{ backgroundColor: '#FBF8F4' }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold" style={{ color: '#1E1B4B' }}>커뮤니티</h2>
              <Link href="/community" className="flex items-center gap-1 text-sm font-medium transition-colors duration-200" style={{ color: '#8B5E34' }}>
                전체 보기 <ChevronRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {posts.map(post => (
                <Link
                  key={post.id}
                  href="/community"
                  className="block rounded-2xl border bg-white p-5 transition-all duration-200 hover:shadow-md"
                  style={{ borderColor: '#EEE4D7', boxShadow: '0 14px 34px rgba(57, 43, 31, 0.04)' }}
                >
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold" style={{ color: '#1E1B4B' }}>{post.title}</h3>
                    <span className="flex-shrink-0 rounded-full px-2 py-0.5 text-xs" style={{ backgroundColor: '#F5EBDD', color: '#8B5E34' }}>
                      {post.category}
                    </span>
                  </div>
                  <p className="mb-4 line-clamp-2 text-xs" style={{ color: '#64748B' }}>{post.content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: '#B98954' }}>
                        {post.author[0]}
                      </div>
                      <span className="text-xs" style={{ color: '#64748B' }}>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs" style={{ color: '#94A3B8' }}>
                      <span className="flex items-center gap-1"><Heart size={12} /> {post.likes}</span>
                      <span className="flex items-center gap-1"><MessageCircle size={12} /> {post.comments}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-18 md:py-20">
          <div
            className="rounded-[2rem] border p-8 md:p-12"
            style={{
              borderColor: '#E1D2BF',
              background: 'linear-gradient(135deg, #8B5E34 0%, #6E4A2F 55%, #B98954 100%)',
            }}
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#F8E6CD' }}>
                  <MapPin size={16} />
                  오시는 길
                </div>
                <h2 className="mt-3 text-2xl font-bold text-white md:text-4xl">
                  예배 공간과 위치를
                  <br />
                  미리 확인하고 편하게 방문하세요
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 md:text-base" style={{ color: '#F5EBDD' }}>
                  {churchProfile.address}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold transition-colors duration-200"
                  style={{ color: '#8B5E34' }}
                >
                  소개 페이지 보기
                </Link>
                <Link
                  href="/worship"
                  className="rounded-xl border px-5 py-3 text-sm font-semibold transition-colors duration-200"
                  style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#FFFFFF' }}
                >
                  예배 안내 보기
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
