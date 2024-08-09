import instance from "./API-instance.js";

const handledAPIPost = async (path, payload) => {
    try {
        const response = await instance.post(path, payload);
        return response.data;
    } catch (error) {
        console.log(error);

        throw new Error(error.response.data.msg);
    }
};

const handledAPIGet = async (path) => {
    try {
        const response = await instance.get(path);
        return response.data;
    } catch (error) {
        console.log(error);

        throw new Error(error.response.data.msg);
    }
};

export { handledAPIGet, handledAPIPost };


