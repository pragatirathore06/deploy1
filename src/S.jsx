const Self = () => {
  return (
    <div className="space-y-2">
      <div className="hover:bg-blue-600 hover:text-white border justify-center p-2 border-gray-200 flex items-center rounded-md">
        <img
          src="/image/gitlab.png"
          alt="GitLab"
          className="w-6 h-6 mr-2"
        />
        <span>Self Hosted GitLab</span>
      </div>
      <div className="hover:bg-blue-600 hover:text-white border justify-center p-2 border-gray-200 flex items-center rounded-md">
        <img
          src="/image/bitbucket.png"
          alt="Bitbucket"
          className="w-6 h-6 mr-2"
        />
        <span>Self Hosted Bitbucket</span>
      </div>
    </div>
  );
};

export default Self;
