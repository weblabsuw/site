export function EventShimmer() {

  return <div className={`bg-primary/10 rounded-3xl overflow-hidden h-[150px] flex flex-col px-6 md:py-4 py-6 transition animate-pulse`}>
      <div className="h-4 bg-primary/20 rounded w-3/4 mb-2" />
      <div className="h-3 bg-primary/20 rounded w-1/2 mb-2" />
      <div className="h-3 bg-primary/20 rounded w-5/6 mb-2" />
      <div className="flex-grow" />
    </div>;
}
