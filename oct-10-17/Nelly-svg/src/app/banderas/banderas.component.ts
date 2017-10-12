import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-banderas',
  templateUrl: './banderas.component.html',
  styleUrls: ['./banderas.component.styl']
})
export class BanderasComponent implements OnInit {

  constructor() { }

  ngOnInit() {

var suiza=
 d3.select('#suiza');
 var sz= suiza.append('g')
 .append('svg')
 .attr('width',290)
 .attr('height',175)

 sz.append('rect')
 .attr('x','0')
 .attr('y','0')
 .attr('width','290')
 .attr('height','175')
 .attr('stroke','#FF0000')
 .attr('fill','#FF0000')
 sz.append('line')
 .attr('x1','85')
 .attr('y1','85')
 .attr('x2','205')
 .attr('y2','85')
 .attr('stroke-width','40')
 .attr('stroke','white')
 sz.append('line')
 .attr('x1','145')
 .attr('y1','25')
 .attr('x2','145')
 .attr('y2','145')
 .attr('stroke-width','40')
 .attr('stroke','white')



  var suecia=
   d3.select('#suecia');
   var sc= suecia.append('g')
   .append('svg')
   .attr('width',290)
   .attr('height',175)

   sc.append('rect')
   .attr('x','0')
   .attr('y','0')
   .attr('width','290')
   .attr('height','175')
   .attr('stroke','#005187')
   .attr('fill','#005187')
   sc.append('line')
   .attr('x1','0')
   .attr('y1','85')
   .attr('x2','290')
   .attr('y2','85')
   .attr('stroke-width','30')
   .attr('stroke','#FFC021')
   sc.append('line')
   .attr('x1','115')
   .attr('y1','0')
   .attr('x2','115')
   .attr('y2','175')
   .attr('stroke-width','30')
   .attr('stroke','#FFC021')

   var jamaica=
    d3.select('#jamaica');
    var jm= jamaica.append('g')
    .append('svg')
    .attr('width',290)
    .attr('height',175)

    jm.append('rect')
    .attr('x','0')
    .attr('y','0')
    .attr('width','290')
    .attr('height','175')
    .attr('stroke','#1C8933')
    .attr('fill','#1C8933')
    jm.append('line')
    .attr('x1','0')
    .attr('y1','0')
    .attr('x2','290')
    .attr('y2','175')
    .attr('stroke-width','30')
    .attr('stroke','#FCD926')
    jm.append('line')
    .attr('x1','0')
    .attr('y1','175')
    .attr('x2','290')
    .attr('y2','0')
    .attr('stroke-width','30')
    .attr('stroke','#FCD926')
    jm.append('polygon')
    .attr('points',"0,18 0,160 116,87")
    .attr('fill', 'black')
    jm.append('polygon')
    .attr('points',"290,18 290,160 166,87 ")
    .attr('fill', 'black')

    var japon=
     d3.select('#japon');
     var jp= japon.append('g')
     .append('svg')
     .attr('width',290)
     .attr('height',175)

     jp.append('rect')
     .attr('x','0')
     .attr('y','0')
     .attr('width','290')
     .attr('height','175')
     .attr('stroke','grey')
     .attr('fill','#FFFFFF')
     jp.append('circle')
     .attr('cx','145')
     .attr('cy','87.5')
     .attr('r','50')
     .attr('stroke','#BC002D')
     .attr('fill','#BC002D')

     var italia=
      d3.select('#italia');

      var it= italia.append('g')
      .append('svg')
      .attr('width',290)
      .attr('height',175)

      it.append('rect')
      .attr('x','0')
      .attr('y','0')
      .attr('width','290')
      .attr('height','175')
      .attr('stroke','#FFFFF')
      .attr('fill','#FFFFFF')
      it.append('rect')
      .attr('x','0')
      .attr('y','0')
      .attr('width','97')
      .attr('height','175')
      .attr('stroke','#00904B')
      .attr('fill','#00904B')
      it.append('rect')
      .attr('x','194')
      .attr('y','0')
      .attr('width','97')
      .attr('height','175')
      .attr('stroke','#D53039')
      .attr('fill','#D53039')

      var noruega=
       d3.select('#noruega');
       var ng= noruega.append('g')
       .append('svg')
       .attr('width',290)
       .attr('height',175)

       ng.append('rect')
       .attr('x','0')
       .attr('y','0')
       .attr('width','290')
       .attr('height','175')
       .attr('stroke','#F92C2C')
       .attr('fill','#F92C2C')
       ng.append('line')
       .attr('x1','0')
       .attr('y1','85')
       .attr('x2','290')
       .attr('y2','85')
       .attr('stroke-width','52')
       .attr('stroke','white')
       ng.append('line')
       .attr('x1','110')
       .attr('y1','0')
       .attr('x2','110')
       .attr('y2','175')
       .attr('stroke-width','52')
       .attr('stroke','white')
       ng.append('line')
       .attr('x1','0')
       .attr('y1','85')
       .attr('x2','290')
       .attr('y2','85')
       .attr('stroke-width','25')
       .attr('stroke','#002867')
       ng.append('line')
       .attr('x1','110')
       .attr('y1','0')
       .attr('x2','110')
       .attr('y2','175')
       .attr('stroke-width','25')
       .attr('stroke','#002867')

       var palestina=
        d3.select('#palestina');

        var pa= palestina.append('g')
        .append('svg')
        .attr('width',290)
        .attr('height',175)

        pa.append('rect')
        .attr('x','0')
        .attr('y','0')
        .attr('width','290')
        .attr('height','175')
        .attr('stroke','#00971C')
        .attr('fill','#00971C')
        pa.append('rect')
        .attr('x','0')
        .attr('y','0')
        .attr('width','290')
        .attr('height','58')
        .attr('stroke','black')
        .attr('fill','black')
        pa.append('rect')
        .attr('x','0')
        .attr('y','58')
        .attr('width','290')
        .attr('height','58')
        .attr('stroke','white')
        .attr('fill','white')
        pa.append('polygon')
        .attr('points',"0,0 0,175 125,87 ")
        .attr('fill','#FF0E00')

        var botswana=
         d3.select('#botswana');
         var bt= botswana.append('g')
         .append('svg')
         .attr('width',290)
         .attr('height',175)

         bt.append('rect')
         .attr('x','0')
         .attr('y','0')
         .attr('width','290')
         .attr('height','175')
         .attr('stroke','#6DA9D9')
         .attr('fill','#6DA9D9')
         bt.append('line')
         .attr('x1','0')
         .attr('y1','85')
         .attr('x2','290')
         .attr('y2','85')
         .attr('stroke-width','48')
         .attr('stroke','white')
         bt.append('line')
         .attr('x1','0')
         .attr('y1','85')
         .attr('x2','290')
         .attr('y2','85')
         .attr('stroke-width','35')
         .attr('stroke','black')

         var tongo=
          d3.select('#tongo');
          var tg= tongo.append('g')
          .append('svg')
          .attr('width',290)
          .attr('height',175)

          tg.append('rect')
          .attr('x','0')
          .attr('y','0')
          .attr('width','290')
          .attr('height','175')
          .attr('stroke','#FF0000')
          .attr('fill','#FF0000')
          tg.append('rect')
          .attr('x','0')
          .attr('y','0')
          .attr('width','130')
          .attr('height','90')
          .attr('stroke','white')
          .attr('fill','white')
          tg.append('line')
          .attr('x1','35')
          .attr('y1','45')
          .attr('x2','95')
          .attr('y2','45')
          .attr('stroke-width','20')
          .attr('stroke','#FF0000')
        tg.append('line')
          .attr('x1','65')
          .attr('y1','15')
          .attr('x2','65')
          .attr('y2','75')
          .attr('stroke-width','20')
          .attr('stroke','#FF0000')



                   var marruecos=
                    d3.select('#marruecos');
                    var mc= marruecos.append('g')
                    .append('svg')
                    .attr('width',290)
                    .attr('height',175)

                    mc.append('rect')
                    .attr('x','0')
                    .attr('y','0')
                    .attr('width','290')
                    .attr('height','175')
                    .attr('stroke','#CD0B00')
                    .attr('fill','#CD0B00')
                    mc.append('polygon')
                    .attr('points',"138,50 109,127 183,78 93,78 170,127")
                    .attr('stroke','#008318')
                    .attr('fill', 'transparent')
                    .attr('stroke-width','10')

                    var panama=
                     d3.select('#panama');

                     var pn= panama.append('g')
                     .append('svg')
                     .attr('width',290)
                     .attr('height',175)

                     pn.append('rect')
                     .attr('x','0')
                     .attr('y','0')
                     .attr('width','290')
                     .attr('height','175')
                     .attr('stroke','#FFFFFF')
                     .attr('fill','#FFFFFF')
                     pn.append('rect')
                     .attr('x','0')
                     .attr('y','87.5')
                     .attr('width','145')
                     .attr('height','87.5')
                     .attr('stroke','#0067C3')
                     .attr('fill','#0067C3')
                     pn.append('rect')
                     .attr('x','145')
                     .attr('y','0')
                     .attr('width','145')
                     .attr('height','87.5')
                     .attr('stroke','#D53039')
                     .attr('fill','#D53039')
                     pn.append('path')

                     .attr('transform',' translate(72.5, 44) scale(25,25)')
                     .attr('d',"M 0 -1 L 0.588 0.809 -0.951 -0.309 0.951 -0.309 -0.588 0.809 Z")
                     .attr('fill','#0067C3')

                     pn.append('path')

                     .attr('transform',' translate(217.5, 131.5) scale(25,25)')
                     .attr('d',"M 0 -1 L 0.588 0.809 -0.951 -0.309 0.951 -0.309 -0.588 0.809 Z")
                     .attr('fill','#D53039')


                     var vietnam=
                      d3.select('#vietnam');
                     var vt= vietnam.append('g')
                     .append('svg')
                     .attr('width',290)
                     .attr('height',175)

                     vt.append('rect')
                     .attr('x','0')
                     .attr('y','0')
                     .attr('width','290')
                     .attr('height','175')
                     .attr('stroke','#E22B21')
                     .attr('fill','#E22B21')
                     vt.append('path')

                     .attr('transform',' translate(145, 87.5) scale(50,50)')
                     .attr('d',"M 0 -1 L 0.588 0.809 -0.951 -0.309 0.951 -0.309 -0.588 0.809 Z")
                     .attr('fill','yellow')


                     var cuba=
                      d3.select('#cuba');

                      var cu= cuba.append('g')
                      .append('svg')
                      .attr('width',290)
                      .attr('height',175)

                      cu.append('rect')
                      .attr('x','0')
                      .attr('y','0')
                      .attr('width','290')
                      .attr('height','175')
                      .attr('stroke','#002e8c')
                      .attr('fill','#002e8C')
                      cu.append('rect')
                      .attr('x','0')
                      .attr('y','35')
                      .attr('width','290')
                      .attr('height','35')
                      .attr('stroke','white')
                      .attr('fill','white')
                      cu.append('rect')
                      .attr('x','0')
                      .attr('y','70')
                      .attr('width','290')
                      .attr('height','35')
                      .attr('stroke','#002e8C')
                      .attr('fill','#002e8C')
                      cu.append('rect')
                      .attr('x','0')
                      .attr('y','105')
                      .attr('width','290')
                      .attr('height','35')
                      .attr('stroke','white')
                      .attr('fill','white')
                      cu.append('polygon')
                      .attr('points',"0,0 0,175 125,87 ")
                      .attr('fill','#FF0E00')
                      cu.append('path')

                      .attr('transform',' translate(45, 87.5) scale(25,25)')
                      .attr('d',"M 0 -1 L 0.588 0.809 -0.951 -0.309 0.951 -0.309 -0.588 0.809 Z")
                      .attr('fill','white')
 }


}
