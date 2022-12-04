const NoPage = () => {
    return (
        <div class="card mx-auto mt-5 py-4" style={{ width: "35rem" }}>
            <div class="text-center">
                <div class="error mx-auto" data-text="404">
                    404
                </div>
                <p class="lead text-gray-800 mb-5">Page Not Found</p>
                <p class="mb-2">It looks like you found a glitch in the matrix...</p>
                <a href="/dashboard">&larr; Back to Dashboard</a>
            </div>
        </div>
    );
};

export default NoPage;
