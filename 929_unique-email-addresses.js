// https://leetcode-cn.com/problems/unique-email-addresses/
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    // 处理，存储，再计数
    // 考验正则的能力
    let handledList = emails.map((e) => {
        const splited = e.split('@');
        let front = splited[0];
        // 再去掉 @ 前面的 .
        // 先去掉 + 号后面的
        front = front
            .replace(/\./g, '')
            .replace(/\+[\S\s]*/, '');

        return `${front}@${splited[1]}`;
    });

    handledList = handledList.filter((item, index ,arr) => arr.indexOf(item) === index);
    return handledList.length;
};

numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])