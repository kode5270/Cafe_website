import { environment } from "../constants/environtment";
import { fetchAPI } from "../utils/fetch";
import type { ILogin } from "../types/auth";

export const login = async (payload : ILogin) => {
    const result = await fetchAPI (`${environment.API_URL}/auth/login`,{
        method :'POST',
        body : JSON.stringify(payload)
})
return result;
};
