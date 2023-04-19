function parseArti(no, str) {
    let res;
    const regex = /\d+\)/g;
    const matches = str.match(regex);

    if(!matches) return `${no}. ${str}`;
    if (matches) {
        for (let i = 0; i < matches.length; i++) {
            const match = matches[i];
            const superscript = `<span class="mark-footnote">${match}</span>`;
            res = str.replace(match, superscript);
        }
    }

    return `${no}. ${res}`;
}

exports.parseArti = parseArti;