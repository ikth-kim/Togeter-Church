import Link from 'next/link';
import { ArrowLeft, PenSquare, Sparkles } from 'lucide-react';

import CommunityPostForm from '@/components/CommunityPostForm';
import PageHero from '@/components/PageHero';
import { requireUser } from '@/lib/auth';
import { siteAssets } from '@/lib/site';

export default async function CommunityWritePage() {
  const currentUser = await requireUser('/community/write');

  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Community Write"
        title="커뮤니티 글 작성"
        description="로그인한 이름으로 글이 등록되며, 원하는 카테고리를 골라 소식과 나눔을 남길 수 있습니다."
        image={siteAssets.sanctuaryPhoto}
      />

      <section className="mx-auto max-w-4xl px-4 py-18 md:py-20">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: '#8B5E34' }}>
            <Sparkles size={16} />
            로그인한 회원만 글을 작성할 수 있습니다
          </div>
          <Link
            href="/community"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-colors duration-200"
            style={{
              borderColor: '#D9C7B1',
              color: '#8B5E34',
              backgroundColor: '#FFF8F1',
            }}
          >
            <ArrowLeft size={16} />
            목록으로 돌아가기
          </Link>
        </div>

        <div
          className="rounded-[2rem] border bg-white p-6 md:p-8"
          style={{ borderColor: '#EEE4D7' }}
        >
          <div className="mb-6 flex items-center gap-3">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{ backgroundColor: '#F5EBDD', color: '#8B5E34' }}
            >
              <PenSquare size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-bold" style={{ color: '#1E1B4B' }}>
                글 작성 페이지
              </h2>
              <p className="mt-1 text-sm" style={{ color: '#5F6570' }}>
                작성자 이름은 현재 로그인한 계정 이름으로 자동 입력됩니다.
              </p>
            </div>
          </div>

          <CommunityPostForm authorName={currentUser.name} />
        </div>
      </section>
    </main>
  );
}
