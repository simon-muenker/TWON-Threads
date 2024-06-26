export function inference(model, prompt) {
    return fetch("https://inf.cl.uni-trier.de/", {
        method: "POST",
        body: JSON.stringify({
            model: model,
            prompt: prompt,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        mode: "cors",
        cache: "no-cache",
    })
        .then((response) => response.json())
}
