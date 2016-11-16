define(['coords'], function(coords) {
    describe("coords.cartesian", function(){
        var cart;
        var sphere;
        var cyl;
        var convert;
        beforeEach(function() {
            cart = {x: 15/4, y: 5*Math.sqrt(3)/4, z: 5/2};
            sphere = {r: 5, theta: Math.PI/3, phi: Math.PI/6};
            cyl = {r: 5*Math.sqrt(3)/2, theta: Math.PI/6, z: 5/2};
        });

        it("returns cartesian objects unchanged", function(){
            convert = coords.cartesian(cart);
            expect(convert.x).toBeCloseTo(cart.x, 10);
            expect(convert.y).toBeCloseTo(cart.y, 10);
            expect(convert.z).toBeCloseTo(cart.z, 10);
        });
        it("converts spherical objects to cartesian", function(){
            convert = coords.cartesian(sphere);
            expect(convert.x).toBeCloseTo(cart.x, 10);
            expect(convert.y).toBeCloseTo(cart.y, 10);
            expect(convert.z).toBeCloseTo(cart.z, 10);
        });
        it("converts cylindrical objects to cartesian", function(){
            convert = coords.cartesian(cyl);
            expect(convert.x).toBeCloseTo(cart.x, 10);
            expect(convert.y).toBeCloseTo(cart.y, 10);
            expect(convert.z).toBeCloseTo(cart.z, 10);
        });
    });
    describe("coords.spherical", function(){
        var cart;
        var sphere;
        var cyl;
        var convert;
        beforeEach(function() {
            cart = {x: 15/4, y: 5*Math.sqrt(3)/4, z: 5/2};
            sphere = {r: 5, theta: Math.PI/3, phi: Math.PI/6};
            cyl = {r: 5*Math.sqrt(3)/2, theta: Math.PI/6, z: 5/2};
        });

        it("returns spherical objects unchanged", function(){
            convert = coords.spherical(sphere);
            expect(convert.r).toBeCloseTo(sphere.r, 10);
            expect(convert.theta).toBeCloseTo(sphere.theta, 10);
            expect(convert.phi).toBeCloseTo(sphere.phi, 10);
        });
        it("converts cartesian objects to spherical", function(){
            convert = coords.spherical(cart);
            expect(convert.r).toBeCloseTo(sphere.r, 10);
            expect(convert.theta).toBeCloseTo(sphere.theta, 10);
            expect(convert.phi).toBeCloseTo(sphere.phi, 10);
        });
        it("converts cylindrical objects to spherical", function(){
            convert = coords.spherical(cyl);
            expect(convert.r).toBeCloseTo(sphere.r, 10);
            expect(convert.theta).toBeCloseTo(sphere.theta, 10);
            expect(convert.phi).toBeCloseTo(sphere.phi, 10);
        });
    });
});

