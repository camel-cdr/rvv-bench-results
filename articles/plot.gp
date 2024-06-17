set term svg size 800, 400
set output "output.svg"
set yrange [0:0.3]
set style data histogram
set style histogram cluster gap 1
set style fill solid
set boxwidth 0.958
set grid ytics
set key outside below maxrows 1
#unset xtics
set border 0

set title "utf8 to utf16 (input bytes/cycle)"

plot "data.dat" using 2:xtic(1) title "C908 scalar" linecolor rgb "#6119ff",\
     "data.dat" using 3:xtic(1) title "C908 rvv"    linecolor rgb "#b366ff",\
     "data.dat" using 4:xtic(1) title "C920 scalar" linecolor rgb "#cb2e00",\
     "data.dat" using 5:xtic(1) title "C920 rvv"    linecolor rgb "#ff951a",\
     "data.dat" using 6:xtic(1) title "X60 scalar"  linecolor rgb "#028e5f",\
     "data.dat" using 7:xtic(1) title "X60 rvv"     linecolor rgb "#00f2a2",\

