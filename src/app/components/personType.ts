export type person = {
    name: {
        title: string,
        first: string,
        last: string
    },
    gender: string,
    location: {
        street: {
            number: number,
            name: string
        },
        city: string,
        state: string,
        country: string,
    },
    email: string,
    login: {
        username: string,
        password: string,
        uuid:string
    }
    dob: {
        date: string,
        age: number
    },
    phone: string,
    cell: string,
    picture: {
        large: string,
        medium: string,
        thumbnail: string
    }
}
