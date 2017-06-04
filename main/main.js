module.exports = function main(s) {
    console.log("Debug Info");
    var number=
	["._.\n|.|\n|_|",  

	"...\n..|\n..|",  

	"._.\n._|\n|_.",  

	"._.\n._|\n._|",  

	"...\n|_|\n..|",  

	"._.\n|_.\n._|",  

	"._.\n|_.\n|_|", 

	"._.\n..|\n..|",  

	"._.\n|_|\n|_|",  

	"._.\n|_|\n..|"]


var text="";
for(var i=0;i<3;i++)
for(var j=0;j<s.length;j++)
{
    var t=number[s[j]-0].split("\n");
    text+=t[i];
    if(j<s.length-1)
    text+=" ";
    else
    text+="\n";

}//+number[s[1]-0].split("\n")[0]+" "number[s[2]-0].split("\n")[0]+"\n"


    return text;
};
