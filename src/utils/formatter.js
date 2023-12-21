import getCountry from 'js-user-country'

const formatter = (number) => {
    const country = getCountry()
    if (country.id === 'VN') {
        // return new Intl.NumberFormat('vi-VN', {
        //     style: 'currency',
        //     currency: 'VND',
        // }).format(number)
        const formattedNumber = number.toLocaleString('en-US', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        })
        return formattedNumber + ' ' + 'Vnđ'
    } else {
        const formattedNumber = number.toLocaleString('en-US', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
        return formattedNumber + '$'
    }
}

export default formatter
