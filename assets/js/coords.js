define('coords', ['lodash'], function(_) {
    var module = {
        cartesian: function(pos_obj) {
            if (_.has(pos_obj, 'x')) {
                return pos_obj;
            }
            if (_.has(pos_obj, 'phi')) {
                return {
                    x: (pos_obj.r * Math.sin(pos_obj.theta) *
                        Math.cos(pos_obj.phi)),
                    y: (pos_obj.r * Math.sin(pos_obj.theta) *
                        Math.sin(pos_obj.phi)),
                    z: (pos_obj.r * Math.cos(pos_obj.theta))
                };
            }
            if (_.has(pos_obj, 'theta')) {
                return {
                    x: (pos_obj.r * Math.cos(pos_obj.theta)),
                    y: (pos_obj.r * Math.sin(pos_obj.theta)),
                    z: (pos_obj.z)
                };
            }
        },
        spherical: function(pos_obj) {
            if (_.has(pos_obj, 'phi')) {
                return pos_obj;
            }
            if (_.has(pos_obj, 'x')) {
                r = (Math.sqrt(pos_obj.x*pos_obj.x + pos_obj.y*pos_obj.y +
                    pos_obj.z*pos_obj.z));
                return {
                    r: r,
                    theta: Math.acos(pos_obj.z/r),
                    phi: Math.atan2(pos_obj.y, pos_obj.x)
                };
            }
            if (_.has(pos_obj, 'theta')) {
                return {
                    r: Math.sqrt(pos_obj.z*pos_obj.z + pos_obj.r*pos_obj.r),
                    theta: Math.atan2(pos_obj.r, pos_obj.z),
                    phi: pos_obj.theta
                };
            }
        },
    };
    return module;
});

