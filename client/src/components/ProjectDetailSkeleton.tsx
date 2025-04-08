/**
 * Skeleton loader component for project detail page
 * Displays an animated loading state while project details are being fetched
 * 
 * @returns A skeleton loading placeholder for the project detail page
 */
const ProjectDetailSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Header skeleton */}
      <div className="mb-10">
        <div className="h-10 bg-gray-200 rounded-md w-1/2 mb-4"></div>
        <div className="h-5 bg-gray-200 rounded-md w-full max-w-2xl mb-8"></div>
        
        {/* Tech stack pills skeleton */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-8 w-20 bg-gray-200 rounded-full"></div>
          ))}
        </div>
        
        {/* Action buttons skeleton */}
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="h-10 w-32 bg-gray-200 rounded-md"></div>
          <div className="h-10 w-32 bg-gray-200 rounded-md"></div>
        </div>
      </div>
      
      {/* Main image skeleton */}
      <div className="w-full h-80 bg-gray-200 rounded-lg mb-12"></div>
      
      {/* Content sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
        {/* Overview section */}
        <div className="lg:col-span-2">
          <div className="h-8 bg-gray-200 rounded-md w-1/4 mb-6"></div>
          <div className="space-y-3 mb-8">
            <div className="h-4 bg-gray-200 rounded-md w-full"></div>
            <div className="h-4 bg-gray-200 rounded-md w-full"></div>
            <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded-md w-full"></div>
            <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
          </div>
          
          <div className="h-8 bg-gray-200 rounded-md w-1/4 mb-6"></div>
          <div className="space-y-3 mb-8">
            <div className="h-4 bg-gray-200 rounded-md w-full"></div>
            <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded-md w-full"></div>
          </div>
          
          <div className="h-8 bg-gray-200 rounded-md w-1/4 mb-6"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded-md w-full"></div>
            <div className="h-4 bg-gray-200 rounded-md w-full"></div>
            <div className="h-4 bg-gray-200 rounded-md w-4/5"></div>
          </div>
        </div>
        
        {/* Sidebar skeleton */}
        <div className="lg:col-span-1">
          <div className="h-8 bg-gray-200 rounded-md w-2/3 mb-6"></div>
          
          <div className="space-y-6 mb-10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-3">
                <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                <div className="h-6 bg-gray-200 rounded-md w-5/6"></div>
              </div>
            ))}
          </div>
          
          <div className="h-8 bg-gray-200 rounded-md w-2/3 mb-6"></div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="h-4 bg-gray-200 rounded-md w-full mb-3"></div>
            <div className="h-4 bg-gray-200 rounded-md w-full mb-3"></div>
            <div className="h-4 bg-gray-200 rounded-md w-3/4 mb-6"></div>
            <div className="h-4 bg-gray-200 rounded-md w-1/2"></div>
          </div>
        </div>
      </div>
      
      {/* Screenshots section */}
      <div className="mb-10">
        <div className="h-8 bg-gray-200 rounded-md w-1/4 mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-3"></div>
              <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailSkeleton;