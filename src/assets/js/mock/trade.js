import Mock from 'mockjs';
let Random = Mock.Random;

export const trade = [
    {
        path: '/json/trade.json',
        data: {
            newMessages: [
                '最新成交： 用户 assfa_fa 成功交易 100 DOGE',
                '最新成交： 用户 assfa_fa 成功交易 200 DOGE',
                '最新成交： 用户 assfa_fa 成功交易 300 DOGE',
                '最新成交： 用户 assfa_fa 成功交易 400 DOGE',
                '最新成交： 用户 assfa_fa 成功交易 500 DOGE',
                '最新成交： 用户 assfa_fa 成功交易 600 DOGE',
                '最新成交： 用户 assfa_fa 成功交易 700 DOGE'
            ],
            dataTable: [
                {
                    'id': 0,
                    'uid': 5000,
                    'name': Random.ctitle(3, 4),
                    'EsAbbreviation': Random.string('upper', 3, 4),
                    'Information': Random.csentence(0, 24),
                    'price': Random.float(0, 10000, 0, 4),
                    'Quantity': Random.float(0, 10000, 0, 4),
                    'totalPrice': Random.float(0, 10000, 0, 4),
                    'Guarantee': Random.boolean(),
                    'type': Random.boolean(),
                    'img': Random.image()
                },
                {
                    'id': 0,
                    'uid': 5001,
                    'name': Random.ctitle(3, 4),
                    'EsAbbreviation': Random.string('upper', 3, 4),
                    'Information': Random.csentence(0, 24),
                    'price': Random.float(0, 10000, 0, 4),
                    'Quantity': Random.float(0, 10000, 0, 4),
                    'totalPrice': Random.float(0, 10000, 0, 4),
                    'Guarantee': Random.boolean(),
                    'type': Random.boolean(),
                    'img': Random.image()
                },
                {
                    'id': 0,
                    'uid': 5002,
                    'name': Random.ctitle(3, 4),
                    'EsAbbreviation': Random.string('upper', 3, 4),
                    'Information': Random.csentence(0, 24),
                    'price': Random.float(0, 10000, 0, 4),
                    'Quantity': Random.float(0, 10000, 0, 4),
                    'totalPrice': Random.float(0, 10000, 0, 4),
                    'Guarantee': Random.boolean(),
                    'type': Random.boolean(),
                    'img': Random.image()
                },
                {
                    'id': 0,
                    'uid': 5003,
                    'name': Random.ctitle(3, 4),
                    'EsAbbreviation': Random.string('upper', 3, 4),
                    'Information': Random.csentence(0, 24),
                    'price': Random.float(0, 10000, 0, 4),
                    'Quantity': Random.float(0, 10000, 0, 4),
                    'totalPrice': Random.float(0, 10000, 0, 4),
                    'Guarantee': Random.boolean(),
                    'type': Random.boolean(),
                    'img': Random.image()
                },
                {
                    'id': 0,
                    'uid': 5004,
                    'name': Random.ctitle(3, 4),
                    'EsAbbreviation': Random.string('upper', 3, 4),
                    'Information': Random.csentence(0, 24),
                    'price': Random.float(0, 10000, 0, 4),
                    'Quantity': Random.float(0, 10000, 0, 4),
                    'totalPrice': Random.float(0, 10000, 0, 4),
                    'Guarantee': Random.boolean(),
                    'type': Random.boolean(),
                    'img': Random.image()
                },
            ]
        }
    }
];
