export default {
    async makeRequest(this: any, requestFunc: () => Promise<any>) {
        try {
            const response = await requestFunc();
            return response;
        } catch (err: any) {
            await this.handleRateLimit(err, () => this.makeRequest(requestFunc));
            this.handleUnauthorized();
            throw err;
        }
    },

    async handleRateLimit(
        this: any,
        err: any,
        retryCallback: () => Promise<any>
    ) {
        if (err?.response?.data?.message === "You are being rate limited.") {
            const retryAfter = err.response.data.retry_after || 1;
            setTimeout(retryCallback, retryAfter * 1300);
        }
    },

    handleUnauthorized() {
        location.href = "/users/logout"
    },
};
