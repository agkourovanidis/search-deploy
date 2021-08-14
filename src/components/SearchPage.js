import React from "react";
import "./SearchPage.css";
// import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

const ioli_imgs=[
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/8702/53696.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/8702/53688.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/8702/53697.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/8702/53695.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/8702/53690.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/8702/53691.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/8702/53692.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/8702/53693.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/8702/53694.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/8702/53689.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/8702/8702_ioli-apartments-fourka-beach_80388.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/8702/8702_ioli-apartments-fourka-beach_80387.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/8702/8702_ioli-apartments-fourka-beach_80389.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/8702/8702_ioli-apartments-fourka-beach_80390.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/8702/8702_ioli-apartments-fourka-beach_80391.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/8702/8702_ioli-apartments-fourka-beach_80392.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/8702/8702_ioli-apartments-fourka-beach_80393.jpeg',  
]
const julia_imgs = [
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188235.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188255.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188236.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188254.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_105748.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/111/33621.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188253.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188241.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188251.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188218.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188234.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188222.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188239.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188240.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188237.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188238.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188248.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188246.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188252.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/111/33627.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/111/33625.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_105750.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_105741.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_105749.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_105745.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_105746.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/111/33633.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188224.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188228.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188229.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188230.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188232.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188223.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188233.jpeg',
  ]
const bellagio_imgs = [
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_dixkjij0.x1r.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_3vya4p2e.pgl.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_qkykgxml.h3d.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_rtibjsiz.22c.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_uxo4qkj2.eav.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_kbo22jkg.fsx.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_udewots5.yta.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_cdo3oojv.wfs.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_4df3stbd.ufx.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_ymiza2l0.ep2.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_1y5dg20b.ack.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_zishffeq.yis.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_hlh4ityp.xdx.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_12vdeszj.xcr.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_3sqrfscq.3ci.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_alkaehng.c4z.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_4rbduowf.mpq.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_egxyf4bq.czu.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_n45iycwi.nrc.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_hw4xy1b5.eka.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_sc3netyd.np5.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_g4jnq4fk.r3h.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_js4va331.a4e.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_pfqz3v25.vfj.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_tm23qbqx.uu4.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_22v0lr2g.zoc.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_1zth4zmk.nio.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_txjmusex.ocv.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_azfjwkbi.ww5.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_nwj2fmid.ywl.jpg',
]

const Greek_Pride_Hotel_Apartments_imgs = [
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195698.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195701.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195695.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195694.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195699.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195692.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195700.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195697.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195696.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195704.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195693.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195703.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195687.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195686.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_dy2bwbaz.dxh.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195713.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195716.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195717.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195715.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195705.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195688.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195691.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195689.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195690.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195702.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195706.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195708.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195709.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_a3rglnep.n1c.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_zqtp2424.hpi.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_xt1xgxfj.a2o.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_tjdbhm2v.jxk.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_3bvjlomn.ucd.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_zemugenz.dis.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_zc3d3uku.wgl.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_054zl0at.0mv.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_ioa4uw0e.m4n.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_coamtsjg.cyi.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195711.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_wakzyrtm.x34.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_1kjrls3d.5mz.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_udactbew.gds.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_obkm2kmx.rve.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_ki5bvcow.mxq.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_igpb0m0k.1hs.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195707.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_nabmeatq.ycx.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_1uwilx2c.ecb.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_b2r3qoie.dni.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_el5bl0t3.smh.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_mpwlk4s5.xsx.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_ekbfzldr.3ge.jpg',
'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_pmtgeliw.jwz.jpg',
]

const Greek_Pride_Themelis_imgs = [
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6192491/6192491_nnltwk3gd5r..jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6192491/6192491_e5aocdjk3g5..jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6192491/6192491_fgomomomgil..jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6192491/6192491_ygetanryazo..jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6192491/6192491_rdlpyaa5j04..jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6192491/6192491_r24ro0jfb50..jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6192491/6192491_xxe5etolm4w..jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6192491/6192491_vsldluefg30..jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6192491/6192491_2cde20pn1sg..jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6192491/6192491_dpbgxbpemdf..jpg',
]

const Greek_Pride_Ellada_imgs = [
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_bhz53cad.gao.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_h41sx4bj.ifu.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_ud1nsqet.qah.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_mlqif0bk.0jj.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_cggg3pyf.p04.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_cqb0qctz.mxk.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_wdv4bit2.l5b.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_s4kai2ge.r3b.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_ldl2b5et.3vh.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_zsslu5id.wwx.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_hht1kez4.zsp.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_3x5e14pd.mv5.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_5y1weaki.3bj.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_pdgz5wlr.sdt.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_nono3x5f.pef.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_v0rp1zd4.ew1.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_4jcejicu.lo1.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_q30t4kyk.03x.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_dzg5sx5q.t2p.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_3uhndd0u.oor.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_ftsvycr4.jo3.jpg',
]

const OlympionSunset_imgs = [
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_ztv1njow.2yy.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_ecbkmjwt.mmb.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_cod05y1x.5yq.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_2wllzwqa.04l.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_t45d5tlb.pqx.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_ftcprksg.ewx.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_saoioamg.ili.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_olympion-sunset_158681.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_am11bvm0.2h1.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_vzbxn5bu.ct5.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_olympion-sunset_158704.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_olympion-sunset_158708.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_olympion-sunset_158691.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_olympion-sunset_158693.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_olympion-sunset_158703.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_olympion-sunset_158672.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_olympion-sunset_158685.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_olympion-sunset_158687.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_olympion-sunset_158715.jpeg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_nz1coa4t.5kw.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_be0jluvq.mfn.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_isa3mxuy.sf1.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_nanan4no.4gq.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_c13tmotx.nwa.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_tgo0wiev.3pn.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_0meuxb4u.gnz.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_ijosg2m1.wrg.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_5g20bjgz.ton.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_xipizgww.00f.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_5dzs0tmp.vex.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_esk41rwj.pn0.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_hsullmcc.15a.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_b4f1s5iu.30d.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_db4leu0r.uri.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_ztmn4rix.rha.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_ff3fv3rs.xg4.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_0lyzb5yz.2n5.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_fss4pnap.cbl.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_hdkmyeso.4o3.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_t0tsmfjv.otf.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_byk3kf0y.op3.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_k3xduejz.ikp.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_tegaglsg.rve.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_5lidtpah.jv4.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_icbtsu1y.tze.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_3xpnvp3x.dhx.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_t51eqssn.2sn.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_ywl4k3px.u4c.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_vgwcfsnl.idm.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_qu4wtb11.nvt.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_00iseyis.1ln.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_2erac1ak.hai.jpg',
]

function SearchPage() {
  return (
    <div className="searchPage">
      {/* <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div> */}
      <div>
      {/* <div className="column"> */}
        <SearchResult
          images={ioli_imgs}
          location="Fourka, Chalkidiki-Kassandra, Greece"
          category="Apartments"
          title="Ioli Apartments Fourka Beach"
          // facilities='✔Kitchen   ✔WiFi   ✔Billiards   ✔Parking'
          facility01="Kitchen"
          facility02="WiFi"
          facility03="Billiards"
          facility04="Parking"
          roomtype="Apartment Room Standard"
          pansion="Not Included"
          price="330"
          checkIn="05 Sep 21 for 7 nights"
          guests="2 adults and 1 child"
        />
        <SearchResult
          images={julia_imgs}
          location="Fourka, Chalkidiki-Kassandra, Greece"
          category="★★★"
          title="Bomo Julia Hotel"
          // facilities='✔Parking   ✔WiFi   ✔Swimming Pool   ✔Table Tennis'
          facility01="Parking"
          facility02="WiFi"
          facility03="Swimming Pool"
          facility04="Table Tennis"
          roomtype="Apartment Room Standard"
          pansion="Not Included"
          price="404"
          checkIn="05 Sep 21 for 7 nights"
          guests="2 adults and 1 child"
        />
        <SearchResult
          images={bellagio_imgs}
          location="Fourka, Chalkidiki-Kassandra, Greece"
          category="★★★★"
          title="Bomo Bellagio Hotel"
          // facilities='✔Parking   ✔WiFi   ✔Swimming Pool   ✔Billiards'
          facility01="Parking"
          facility02="WiFi"
          facility03="Billiards"
          facility04="Swimming Pool"
          roomtype="Apartment Room Standard"
          pansion="Not Included"
          price="480"
          checkIn="05 Sep 21 for 7 nights"
          guests="2 adults and 1 child"
        />
        <SearchResult
          images={Greek_Pride_Hotel_Apartments_imgs}
          location="Fourka, Chalkidiki-Kassandra, Greece"
          category="Apartments"
          title="Greek Pride Hotel Apartments"
          // facilities='✔Parking   ✔WiFi   ✔Swimming Pool   ✔Bus Station'
          facility01="Parking"
          facility02="WiFi"
          facility03="Swimming Pool"
          facility04="Bus Station"
          roomtype="Apartment Room Standard"
          pansion="Not Included"
          price="502"
          checkIn="05 Sep 21 for 7 nights"
          guests="2 adults and 1 child"
        />
        <SearchResult
          images={Greek_Pride_Themelis_imgs}
          location="Fourka, Chalkidiki-Kassandra, Greece"
          category="Apartments"
          title="Greek Pride Themelis Studios"
          // facilities='✔WiFi   ✔Swimming Pool   ✔Bus Station ✔Mini Market'
          facility01="WiFi"
          facility02="Swimming Pool"
          facility03="Bus Station"
          facility04="Mini Market"
          roomtype="Apartment Room Standard"
          pansion="Not Included"
          price="560"
          checkIn="05 Sep 21 for 7 nights"
          guests="2 adults and 1 child"
        />
        <SearchResult
          images={Greek_Pride_Ellada_imgs}
          location="Fourka, Chalkidiki-Kassandra, Greece"
          category="Apartments"
          title="Greek Pride Ellada"
          // facilities='✔Kitchen   ✔WiFi   ✔Swimming Pool   ✔Parking'
          facility01="Kitchen"
          facility02="WiFi"
          facility03="Swimming Pool"
          facility04="Parking"
          roomtype="Apartment Room Standard"
          pansion="Not Included"
          price="565"
          checkIn="05 Sep 21 for 7 nights"
          guests="2 adults and 1 child"
        />
        <SearchResult
          images={OlympionSunset_imgs}
          location="Fourka, Chalkidiki-Kassandra, Greece"
          category="★★★★★"
          title="Olympion Sunset Hotel"
          // facilities='✔Conference Hall   ✔Swimming Pool   ✔SPA Center   ✔WiFi'
          facility01="Conference Hall"
          facility02="Swimming Pool"
          facility03="SPA Center"
          facility04="WiFi"
          roomtype="Apartment Room Standard"
          pansion="Not Included"
          price="1746"
          checkIn="05 Sep 21 for 7 nights"
          guests="2 adults and 1 child"
        />
      </div>
    </div>
  );
}

export default SearchPage;
