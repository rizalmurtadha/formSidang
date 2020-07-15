var form = document.forms.myform,
            P1n1 = form.P1n1,
            P1n2 = form.P1n2,
            P1n3 = form.P1n3,

            P2n1 = form.P2n1,
            P2n2 = form.P2n2,
            P2n3 = form.P2n3,

            P3n1 = form.P3n1,
            P3n2 = form.P3n2,
            P3n3 = form.P3n3,

            P4n1 = form.P4n1,
            P4n2 = form.P4n2,
            P4n3 = form.P4n3,

            Ran1 = form.Ran1,
            Ran2 = form.Ran2,
            Ran3 = form.Ran3,

            Rbn1 = form.Rbn1,
            Rbn2 = form.Rbn2,
            Rbn3 = form.Rbn3,

            Rtn1 = form.Rtn1,
            Rtn2 = form.Rtn2,
            Rtn3 = form.Rtn3,

            Na1 = form.Na1,
            Na2 = form.Na2,
            Na3 = form.Na3,
            Index = form.Index;

        window.calculate = function () {
            var n1 = parseInt(P1n1.value) || 0,
                n2 = parseInt(P1n2.value) || 0,
                n3 = parseInt(P1n3.value) || 0,
                n4 = parseInt(P2n1.value) || 0,
                n5 = parseInt(P2n2.value) || 0,
                n6 = parseInt(P2n3.value) || 0,
                n7 = parseInt(P3n1.value) || 0,
                n8 = parseInt(P3n2.value) || 0,
                n9 = parseInt(P3n3.value) || 0,
                n10 = parseInt(P4n1.value) || 0,
                n11 = parseInt(P4n2.value) || 0,
                n12 = parseInt(P4n3.value) || 0;
            Ran1.value = ((n1 + n4)/2);
            Ran2.value = ((n2 + n5)/2);
            Ran3.value = ((n3 + n6)/2);

            Rbn1.value = ((n7 + n10)/2);
            Rbn2.value = ((n8 + n11)/2);
            Rbn3.value = ((n9 + n12)/2);

            Rtn1.value = (parseInt(60/100*Ran1.value) + parseInt(40/100*Rbn1.value));
            Rtn2.value = (parseInt(60/100*Ran2.value) + parseInt(40/100*Rbn2.value));
            Rtn3.value = (parseInt(60/100*Ran3.value) + parseInt(40/100*Rbn3.value));

            Na1.value = Rtn1.value;
            Na2.value = Rtn2.value;
            Na3.value = Rtn3.value;

            var idx = (35/100*Na1.value + 30/100*Na2.value + 35/100*Na3.value)
            if(idx>3.5)
                Index.value = "A" 
            else if(idx>3.25)
                Index.value = "AB"
            else if(idx>2.75)
                Index.value = "B"
            else if(idx>2.25)
                Index.value = "BC"
            else if(idx>1.75)
                Index.value = "C"
            else if(idx>1)
                Index.value = "D"
            else if(idx<1)
                Index.value = "E"
             
        };