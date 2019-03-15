function stars(height) {
    for ( var i = 0; i < height ; i++ ) {
        var star = '*';
        var space = ' ';

        for ( var j = 1; j <= i; j++ ) {
            star = star + '**';            
        }
           
        var spacesBefore = space.repeat(height-i-1);
        star = spacesBefore + star;
        console.log(star);
    }
}

stars(5);