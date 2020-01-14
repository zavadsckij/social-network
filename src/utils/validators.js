export const required = value => {
if(!value) return "Field is required!"
return undefined
}

export const maxLength = symbols => value => {
    if(value.length > symbols) return `Max ${symbols} symbols`
    return undefined
    }