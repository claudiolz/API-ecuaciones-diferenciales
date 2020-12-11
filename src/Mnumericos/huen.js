function F(c, u) {
    return [
        [c * (u[1] + u[5] + u[6] - 3 * u[0])],
        [c * (u[0] + u[2] - 2 * u[1])],
        [c * (u[1] + u[3] - 2 * u[2])],
        [c * (u[2] + u[4]) - 2 * u[3]],
        [c * (u[3] + u[5] - 2 * u[4])],
        [c * (u[0] + u[4] + u[6] - 3 * u[5])],
        [c * (u[0] + u[5] - 2 * u[6])]
    ]
}



function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0),
        i = arr.length,
        temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}



function MetodoHeun(t1, t2) {
    var Lp = {
        'Prediccion': [],
    };
    var Lc = {
        'correccion': []
    };
    var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var u = getRandomSubarray(x, 7);
    let T = [t1];
    let P = [];
    let C = [];
    let CU = u;
    let Dt = [];

    for (y = 0; y < u.length; y++) {
        P.push([u[y]]);
        C.push([u[y]]);
    }
    for (i = 0; i < t2; i++) {
        T.push(T[i] + Math.random())
        for (j = 0; j < u.length; j++) {

            var SF = F(parseInt(Math.random() * 21), CU)
            var DT = T[i + 1] - T[i]

            P[j].push(P[j][i] + ((SF[j][0]) * DT))
            let CUP = []
            for (data in P) {
                CUP.push(P[data][i])
            }
            var SFP = F(parseInt(Math.random() * 21), CUP)
            C[j].push(C[j][i] + ((SFP[j][0] + SF[j][0]) / 2) * DT)

        }
    }
    var n = 1;
    //Prediccion
    for (var i = 0; i < P.length; i++) {
        var u = "U" + n;
        var d = []
        for (var j = 1; j < P[i].length; j++) {
            d.push(P[i][j])
        }
        n++
        Lp.Prediccion.push({
            "id": u,
            "u": P[i][0],
            "data": d,
        });
    };
    n = 1;
    //correccion
    for (var i = 0; i < C.length; i++) {
        var u = "U" + n;
        var d = []
        for (var j = 1; j < C[i].length; j++) {
            d.push(C[i][j])
        }
        n++
        Lc.correccion.push({
            "id": u,
            "u": C[i][0],
            "data": d,
        });
    };
    if (t1 >= 0 && t2 >= 0 && t2 != 0) {
        Dt.push({ "ti": t1, "tf": t2 })
        Dt.push(Lp);
        Dt.push(Lc);
        return Dt
    } else {
        if (t1 < 0) {
            Dt.push({ "erro - t1": t1 })
            return Dt
        }
        if (t2 <= 0 || t2 == 0) {
            Dt.push({ "error - t2 ": t2 })
            return Dt
        }
    }

}

exports.MetodoHeun = MetodoHeun