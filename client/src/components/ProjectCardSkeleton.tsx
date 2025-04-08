/**
 * Skeleton loader component for project cards
 * Displays a loading animation while project data is being fetched
 * 
 * @returns A skeleton loading placeholder for a project card
 */
const ProjectCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gray-200"></div>
      
      {/* Content skeleton */}
      <div className="p-6">
        {/* Title skeleton */}
        <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-4"></div>
        
        {/* Description skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded-md w-full"></div>
          <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded-md w-4/6"></div>
        </div>
        
        {/* Tech stack skeleton */}
        <div className="flex flex-wrap gap-2 mb-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 w-16 bg-gray-200 rounded-full"></div>
          ))}
        </div>
        
        {/* Links skeleton */}
        <div className="flex gap-3 mt-4">
          <div className="h-10 w-28 bg-gray-200 rounded-md"></div>
          <div className="h-10 w-28 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;