

export function sum(a, b) {
    return a + b;
};

export async function async_sum(a, b) {
    // Simulate an asynchronous operation (e.g., API call)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
}
