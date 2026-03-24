import CommunitySectionPage from '@/components/CommunitySectionPage';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function CommunitySharePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const resolvedSearchParams = await searchParams;
  const notice =
    typeof resolvedSearchParams.notice === 'string'
      ? resolvedSearchParams.notice
      : null;

  return <CommunitySectionPage slug="share" notice={notice} />;
}
