const Saas = () => {
  return (
    <div className="space-y-2">
      <div className="hover:bg-blue-600 hover:text-white transition-all border justify-center p-2 border-gray-200 flex items-center rounded-md">
        <img
          src="/src/image/github.png"
          alt="GitHub"
          className="w-6 h-6 mr-2"
        />
        <span>Sign-in with GitHub</span>
      </div>
      <div className="hover:bg-blue-600 hover:text-white border justify-center p-2 border-gray-200 flex items-center rounded-md">
        <img
          src="/src/image/bitbucket.png"
          alt="Bitbucket"
          className="w-6 h-6 mr-2"
        />
        <span>Sign-in with Bitbucket</span>
      </div>
      <div className="hover:bg-blue-600 hover:text-white border justify-center p-2 border-gray-200 flex items-center rounded-md">
        <img
          src="/src/image/AD.png"
          alt="Azure DevOps"
          className="w-6 h-6 mr-2"
        />
        <span>Sign-in with Azure DevOps</span>
      </div>
      <div className="hover:bg-blue-600 hover:text-white border justify-center p-2 border-gray-200 flex items-center rounded-md">
        <img
          src="/src/image/gitlab.png"
          alt="GitLab"
          className="w-6 h-6 mr-2"
        />
        <span>Sign-in with GitLab</span>
      </div>
    </div>
  );
};

export default Saas;

