//get request

const getPost = async (id) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

        if (!res.ok) {
            throw new Error(`Http request error status ${res.status}`)
        }
        const post =  await res.json()
        console.log(post.title);
        console.log(post.body);
                
    } catch (error) {
        console.log(`get request failed ${error}`);
    }
}

getPost(1)

// to fetch user 
const fetchUser = async (id) => {
   try {
     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      if (!res.ok) {
        throw new Error(`request failed with status : ${res.status} `);
      }
      return await res.json();
      
   } catch (error) {
     console.log(`request failed ${error}`);
        }
}

//to fetch post individually

const fetchPost = async (id) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if (!res.ok) {
            throw new Error(`request failed with status ${res.status}`);
        }
        const post = await res.json()
        return post
      //  console.log(post);
        
    } catch (error) {
        console.log(`request failed with the ${error}`);
        
    }
}

const getMultiple = async () => {
    try {
const [user, post] = await Promise.all([
    fetchUser(1),
    fetchPost (1)
])
        console.log(user, post);
        
    } catch (error) {
        console.log(`error on the get request ${error}`);
        
    }
}