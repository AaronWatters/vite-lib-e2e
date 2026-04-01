

/**
 * Returns the sum of two numbers.
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {number} The sum of `a` and `b`.
 */
export function sum(a, b) {
    return a + b;
};

/**
 * Asynchronously returns the sum of two numbers after a short delay.
 * @param {number} a - The first operand.
 * @param {number} b - The second operand.
 * @returns {Promise<number>} A promise that resolves to the sum of `a` and `b`.
 */
export async function async_sum(a, b) {
    // Simulate an asynchronous operation (e.g., API call)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b);
        }, 1000);
    });
};

/**
 * Asynchronously throws an error to demonstrate error handling.
 * @returns {Promise<void>} A promise that always rejects with an error.
 * @throws {Error} Always throws with the message "Something went wrong".
 */
export async function async_error() {
    // Simulate an asynchronous operation that throws an error
    throw new Error('Something went wrong');
};
