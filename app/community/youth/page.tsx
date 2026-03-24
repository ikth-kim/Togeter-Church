import CommunitySectionPage from '@/components/CommunitySectionPage';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function CommunityYouthPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const resolvedSearchParams = await searchParams;
  const notice =
    typeof resolvedSearchParams.notice === 'string'
      ? resolvedSearchParams.notice
      : null;

  return <CommunitySectionPage slug="youth" notice={notice} />;
}
