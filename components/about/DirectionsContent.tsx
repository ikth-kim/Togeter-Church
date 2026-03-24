import { ArrowUpRight, MapPin } from 'lucide-react';

import AboutPageFrame from './AboutPageFrame';
import { getChurchProfile } from '@/lib/data';

export default function DirectionsContent() {
  const churchProfile = getChurchProfile();

  return (
    <AboutPageFrame
      eyebrow="오시는 길"
      title={`${churchProfile.churchName} 위치 안내`}
      description="서울시 도봉구 도당로118 거성학마을아파트상가 2층에 위치해 있습니다."
      align="center"
    >
      <section className="mx-auto max-w-6xl px-4 py-18 md:py-20">
        <div
          className="rounded-[2rem] border bg-white p-6 md:p-8"
          style={{ borderColor: '#EEE4D7' }}
        >
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold" style={{ color: '#8B5E34' }}>
            <MapPin size={16} />
            주소 및 길찾기
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div
              className="overflow-hidden rounded-2xl border"
              style={{ borderColor: '#EEE4D7', height: '420px' }}
            >
              <iframe
                src={churchProfile.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title={`${churchProfile.churchName} 위치 지도`}
              />
            </div>

            <div className="rounded-2xl border bg-white p-6" style={{ borderColor: '#EEE4D7' }}>
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: '#8B5E34' }}
                />
                <div>
                  <p className="mb-1 font-semibold" style={{ color: '#1E1B4B' }}>
                    주소
                  </p>
                  <p className="text-sm leading-7" style={{ color: '#64748B' }}>
                    {churchProfile.address}
                  </p>
                </div>
              </div>

              <div
                className="mt-6 grid grid-cols-1 gap-4 border-t pt-6 sm:grid-cols-2"
                style={{ borderColor: '#EEE4D7' }}
              >
                <div>
                  <p className="mb-2 text-xs font-semibold" style={{ color: '#8B5E34' }}>
                    대중교통
                  </p>
                  <p className="text-sm leading-7" style={{ color: '#64748B' }}>
                    인근 지하철역과 버스정류장에서 도보로 이동하실 수 있습니다.
                  </p>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold" style={{ color: '#8B5E34' }}>
                    차량 이용
                  </p>
                  <p className="text-sm leading-7" style={{ color: '#64748B' }}>
                    내비게이션에 도당로 118을 검색하시면 편하게 찾아오실 수 있습니다.
                  </p>
                </div>
              </div>

              <a
                href={churchProfile.mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
                style={{ backgroundColor: '#8B5E34', color: '#FFFFFF' }}
              >
                지도에서 길찾기
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </AboutPageFrame>
  );
}
