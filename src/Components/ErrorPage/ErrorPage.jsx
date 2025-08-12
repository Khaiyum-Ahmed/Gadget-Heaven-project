
const ErrorPage = () => {
    return (
        <div className="bg-gray-200 text-center content-center h-screen">
            <h3 className="text-5xl mb-5 text-blue-950">404 error</h3>
            <p className="text-base text-gray-600 mb-2">This page doesn't Exist.</p>
            <p className="text-xl">Would you like to <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP" className="text-red-400">learn about HTTP error</a></p>
        </div>
    );
};

export default ErrorPage;