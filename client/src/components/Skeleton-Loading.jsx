export default function SkeletonLoading() {
  return (
    <div className="flex w-52 flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex flex-col gap-16">
          {[1, 2, 3].map((number) => (
            <div key={number} className="skeleton bg-gray-300 h-7 w-[700px] max-sm:w-[300px]"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
