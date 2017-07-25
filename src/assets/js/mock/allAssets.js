import Mock from 'mockjs';
let Random = Mock.Random;

export const allAssets = [
    {
        path: '/json/allAssets.json',
        data: {
            'data': [
                {
                    'id': 0,
                    'name': Random.ctitle(2, 4),
                    'EsAbbreviation': Random.string('upper', 3, 4),
                    'usable': Random.float(0, 10000, 0, 4),
                    'freeze': Random.float(0, 10000, 0, 4),
                    'financial': Random.float(0, 10000, 0, 4),
                    'coinLock': Random.float(0, 10000, 0, 4),
                    'gross': Random.float(0, 100000000, 0, 4),
                },
                {
                    'id': 1,
                    'name': Random.ctitle(2, 4),
                    'EsAbbreviation': Random.string('upper', 3, 4),
                    'usable': Random.float(0, 10000, 0, 4),
                    'freeze': Random.float(0, 10000, 0, 4),
                    'financial': Random.float(0, 10000, 0, 4),
                    'coinLock': Random.float(0, 10000, 0, 4),
                    'gross': Random.float(0, 100000000, 0, 4),
                },
                {
                    'id': 2,
                    'name': Random.ctitle(2, 4),
                    'EsAbbreviation': Random.string('upper', 3, 4),
                    'usable': Random.float(0, 10000, 0, 4),
                    'freeze': Random.float(0, 10000, 0, 4),
                    'financial': Random.float(0, 10000, 0, 4),
                    'coinLock': Random.float(0, 10000, 0, 4),
                    'gross': Random.float(0, 100000000, 0, 4),
                },
                {
                    'id': 3,
                    'name': Random.ctitle(2, 4),
                    'EsAbbreviation': Random.string('upper', 3, 4),
                    'usable': Random.float(0, 10000, 0, 4),
                    'freeze': Random.float(0, 10000, 0, 4),
                    'financial': Random.float(0, 10000, 0, 4),
                    'coinLock': Random.float(0, 10000, 0, 4),
                    'gross': Random.float(0, 100000000, 0, 4),
                },
                {
                    'id': 4,
                    'name': Random.ctitle(2, 4),
                    'EsAbbreviation': Random.string('upper', 3, 4),
                    'usable': Random.float(0, 10000, 0, 4),
                    'freeze': Random.float(0, 10000, 0, 4),
                    'financial': Random.float(0, 10000, 0, 4),
                    'coinLock': Random.float(0, 10000, 0, 4),
                    'gross': Random.float(0, 100000000, 0, 4),
                },
                {
                    'id': 5,
                    'name': Random.ctitle(2, 4),
                    'EsAbbreviation': Random.string('upper', 3, 4),
                    'usable': Random.float(0, 10000, 0, 4),
                    'freeze': Random.float(0, 10000, 0, 4),
                    'financial': Random.float(0, 10000, 0, 4),
                    'coinLock': Random.float(0, 10000, 0, 4),
                    'gross': Random.float(0, 100000000, 0, 4),
                },
                {
                    'id': 6,
                    'name': Random.ctitle(2, 4),
                    'EsAbbreviation': Random.string('upper', 3, 4),
                    'usable': Random.float(0, 10000, 0, 4),
                    'freeze': Random.float(0, 10000, 0, 4),
                    'financial': Random.float(0, 10000, 0, 4),
                    'coinLock': Random.float(0, 10000, 0, 4),
                    'gross': Random.float(0, 100000000, 0, 4),
                },
            ]
        }
    }
];