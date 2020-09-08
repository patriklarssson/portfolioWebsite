interface ApiGetOptions {
	signal?: any
}
interface ApiPostOptions {
	payload?: string
}

export default {
	
	get: (url, options?: ApiGetOptions) => {		
		return fetch(url,
			{
				headers: {
					// 'Accept': 'application/json',
					// 'Content-Type': 'application/json',
				},
				method: "GET",
				// signal: (options || {}).signal
			})
			.then(response => response.json())
			.catch(function(err) {
                console.error(` Err: ${err}`);
            });
	},

	post: (url: string, options?: ApiPostOptions) => {
		return fetch(url,
			{
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method: "POST",
				credentials: "include",
				body: (options || {}).payload
			})
			.then(response => response.json())
	}
}