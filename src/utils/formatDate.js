function formatDate(isoDate) {
    return new Date(isoDate).toLocaleDateString('en-GB', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export default formatDate;