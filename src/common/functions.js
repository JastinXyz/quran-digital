function parseArti(no, str) {
    const regex = /\d+\)/g;
    const matches = str.match(regex);

    if (matches) {
        for (let i = 0; i < matches.length; i++) {
            const match = matches[i];
            const superscript = `<span class="mark-footnote">${match}</span>`;
            str = str.replace(match, superscript);
        }
    }

    return `${no}. ${str}`;
}

exports.parseArti = parseArti;