

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
};

export async function async_error() {
    // Simulate an asynchronous operation that throws an error
    throw new Error('Something went wrong');
};
