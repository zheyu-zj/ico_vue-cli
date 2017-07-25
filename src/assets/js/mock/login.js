import Mock from 'mockjs';
let Random = Mock.Random;

export const login = [
    {
        path: '/json/login.json',
        data: {
            'data': {
                'login': Random.boolean(),
                'uid': Random.integer(5000, 5005),
                'phone': Random.integer(10000000000),
                'coin': [
                    {
                        'id': '1',
                        'name': Random.ctitle(2, 4),
                        'EsAbbreviation': Random.string('upper', 3, 4),
                        'usableCoin': Random.float(0, 10000, 0, 4),
                        'Fee': Random.float(0.01, 0.05, 0, 2),
                        'min': Random.integer(100, 1000),
                        'max': Random.integer(10000, 100000),
                        'usableAmount': Random.integer(0, 10000,)
                    },
                    {
                        'id': '2',
                        'name': Random.ctitle(2, 4),
                        'EsAbbreviation': Random.string('upper', 3, 4),
                        'usableCoin': Random.float(0, 10000, 0, 4),
                        'Fee': Random.float(0.01, 0.05, 0, 2),
                        'min': Random.integer(100, 1000),
                        'max': Random.integer(10000, 100000),
                        'usableAmount': Random.integer(0, 10000,)
                    },
                    {
                        'id': '3',
                        'name': Random.ctitle(2, 4),
                        'EsAbbreviation': Random.string('upper', 3, 4),
                        'usableCoin': Random.float(0, 10000, 0, 4),
                        'Fee': Random.float(0.01, 0.05, 0, 2),
                        'min': Random.integer(100, 1000),
                        'max': Random.integer(10000, 100000),
                        'usableAmount': Random.integer(0, 10000,)
                    }
                ],
            }
        }
    }
];