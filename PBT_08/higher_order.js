function pipe(...fns) {

    return function(value) {

        return fns.reduce(
            (result, fn) =>
                fn(result),
            value
        );

    };

}

function memoize(fn) {

    const cache = {};

    return function(...args) {

        const key =
            JSON.stringify(args);

        if (cache[key]) {

            return cache[key];

        }

        const result =
            fn(...args);

        cache[key] = result;

        return result;

    };

}

function debounce(fn, delay) {

    let timer;

    return function(...args) {

        clearTimeout(timer);

        timer = setTimeout(
            () => fn(...args),
            delay
        );

    };

}

async function retry(
    fn,
    maxAttempts = 3
) {

    let attempt = 0;

    while (
        attempt < maxAttempts
    ) {

        try {

            return await fn();

        } catch (error) {

            attempt++;

            if (
                attempt === maxAttempts
            ) {
                throw error;
            }

        }

    }

}

// TEST PIPE

const process = pipe(

    x => x * 2,
    x => x + 10,
    x => x.toString(),
    x => "Kết quả: " + x

);

console.log(process(5));

// TEST MEMOIZE

const expensiveCalc =
    memoize(n => {

        console.log(
            "Đang tính..."
        );

        let result = 0;

        for (
            let i = 0;
            i < n;
            i++
        ) {

            result += i;

        }

        return result;

    });

console.log(
    expensiveCalc(1000000)
);

console.log(
    expensiveCalc(1000000)
);

// TEST DEBOUNCE

const search =
    debounce(query => {

        console.log(
            "Searching:",
            query
        );

    }, 500);

search("iphone");
search("iphone 16");
search("iphone 16 pro");