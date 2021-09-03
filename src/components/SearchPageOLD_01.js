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
'https://lh3.googleusercontent.com/pw/AM-JKLUkSysdwGib2JU7WQTf89QXF25-gCqUaGcp70NGZyMbfZ8RgmpkTuu4NsjyJW9FngATUfCAmNx_Jh1N6_yi517Qojrhq94Ql9kohuaCJ9rxgqnwcqmm72SXaTza56b4tdWwK7Hb1VxtACik7SCVES9Y=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLXFLpCu5kSpNGaKAVlG-RVAyNUkBLoBMMVDDT4HpZ0EBMI-eeUG2uiWO2MaRTETTaaiH7adSfnRpPT4nzW34Hrv8cAszFjMGuX1c6k3Kc5B10yq8oF4i3cqs1gI4hYEiTTHEj1T3QZwtlsbrqeLs_4A=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLVR_jLZFMN_6nnfHHFvCIezyydvmtO4-cJWmtcCntqFsi_K5Oa11UWR6xcWKPQzCwlCSaXKHyKb6j-aLc3_Ru-dSASPKdD6s0ag4xO2mgFZd_tjLpTjp8eqaIi_bszR61q_vI-YzGJdy_d1xF6vsAVa=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLXjHLfWFzlvZZ1ha407t9XyIQXZJhFDmThXmgOgJ4-P7ZwoNccM28iy5ddsM66jnEHzWgzP0N-htXuLJSZT3JkHpmvm8Jyk21wlnNB-6_EWE0ivbOnCYzVlWxMZqVQ9gGY-_1PUNH5KgmLB51BL1uBo=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLX3rYeaU6WwN_-UUkPU-pNf3JuAGGnFPLsvvFjgk4HX6UYQLPFmkLdXcet6sWWxVWC28HDnW27hdVzDmufht8kul08eCme5otbBPDxW20YVlIvp6Xe6HR98TyWTqT6g_RSEhdHMmDo6cg3vanWLLa0z=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLUJR2iMcTObidRj-kjt8yN7dVTlsv3hr1NSN9UVuZk-y2O5hTlWfAB5VJsUMvZ98zif145x_inBZhlddZesmOOCCZ4ADqtsHh5rEJdhmcvE-qnepy4jzhsJrXKJUl0MwP8NYIhjKqA7aPYHKC-ZjER-=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLVYTE914O7rlh29PdCmn5hg-hsQXfp3aO6wTbOofbZykG0xNsf4Bjwm7Xz60MnV-gp2Kc467BXvSw6ST40ybkcdULwRGEacVM4bXO706k253xQQpNX8PBkFoRmFKD9BxKsMefSWC7ELOGEqJIFiRcv0=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLUxD4Rf2qnirOb-aNb0bb3MmDWd9B_S0Iei8HDH-nplNGfCIs_EDjGZlwuLnzDX3tiPkNl_SuVMMzvRusnDRmQdeSehCgLlgZslfDYaen_6nNCEXidcOoF50R9MoOU9ufQlJR7QDYE8HMU4Aoje7l2u=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLUp8Le7dW_VWko7scZ1YlUxCI4885pJkugFCSHBS7c7mxpsL5b5zHimJheT69TF_2r90sdEPZQ127WM9zXDnf8waO_Vz3JL3se7JL6Y-Pc8L3KEgQaXwrYz2QzZZQ-gjM9oGL148l9igzt547yVQRuB=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLX20QW52kngQTBkjX6RzpFMEH29jiLHXN-DfpVtqwZLheou2NQJp52NHbXYrAqElHlq4qCYB7dMyC8akyOU66tDl_UFza6To7a50mPjOYrwjy6j5YMTPoE0IHvp40LW7vyubp7ggvDF-vhilnlCsili=w1024-h568-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLWxZL12tcCTFd_VfurKp5IUjZQAKOssd3oq_j_v_PnsyEIjvlCLsL-Bjsb-2VlIvbHb7Xe2M1DJoOV0LJ-XjnjOv_lcCefAYZWMvWeQJb7ok6NX1VVAyIHgsGfvrowfIy7q6gYf9GnkLIs8hXc7LMho=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLV3qi8GLSMnt5FRRlS4bGGyJwTWYRffY9ZHNf2V45lH4wDto_OZ7iY-QxjZkrAZPHSMubu70vIfpz36W-XQPAVUClBywRLnZVdZ9pZJr6bq1s2U0u_csO6HWpqzuvXbtgNxaJy_J7wfrgdce4plI96u=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLX1ZWzjkyMiLye0XuXfDA2ShYpQKVd5WGGC2x2uMOIgWmkLTkGJXVEjlYcWD0O8I1B5AjwtZPJMlsyHqaqX5su_CK32KCohO2AzGAGd3O82fJ0AIscceo_cqGZGD9N9nEOOjLO1iL7ct4ETvLWxg885=w1024-h754-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLWYJDWhgiTnPa7e5JJdfvclMER5rT5SJTqGydNHN8lDU0TSiMEWPNf4rXPFIXBTaiJ5kP5wWm2tRSJ7kFmCskm0sjX4_RZoB0vVrWA3i8BxI_bp0e0MbBsw_Cpssej2M2g5yZS_lP3L8LXiHNDmHm3x=w1024-h748-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLWr_wESmMZikqpqXcLfOCBcbCSCr5aeZJ5Ry74cCZFO2ueaODriBw8Ye6sJnVWOcS7kwh5o8AioioLnVje1msHQLgUnGj4H24DCCVAsHaqPXBGu78OnlhtClOeTuxGECx2hzuHUB88yi5DXa3IwYa1R=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLWLHVeX8Y-hf-s6sjcASv6_LDgirEZWN4szYYxKGHorTFDXqD8mokiSkZA5MRpeYrtg8av5KJn4JA2fFbeWezpwwHG-xFP034O7e7RwAT4bBpaAzj6NnSWvm1O05YZnpg_UaA1HOIZinNE1kVXx3sU1=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLXjXrk_oTPoOcuMxXUFXzqZC7ZXKMWNRsztq7fda8HUd4HQ-ptgp5Z1ggn_S2RL9YUzwr_TgP-gSa1WYNWdQb-taNcG4ZzmATyYKmss6-FpG4yV6Wy0phwxByZeBPUbQEoAJQxkxnOp0MMWEpA3n4eU=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLWdSlwPgA0h3CT-wDcltlT5wLKhIEI8bEG2q_GjT1lcHBTJny4W-Gcx6LLdFZOqubw9mdupw9WB5gPBOBCLr1Ekqy035sTHaqecVdwblJyH7aku2A7X7aEsk6FxONSL8p1BbZme5rMsrxwI8nQuR1bq=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLWBBMVatProSEKFWEl9cpFol0vNVC8xKNtoU6J-UQB-9NCox1o1J6jixuhlS-bpqqrFsH2H6_lizb9_jpP-onujMD7OgiHNxf1Sim_4uxCHmg0kWLJmfiWd3Fe-nBo_ne6WBY1CK5SGbP1_SNpl6Ll6=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLXKNIk8VDGDUo9YHc-I-AwywghCUomgEZnU0d71XMjqLxP-E6WL_kSiP-IwW2tN4I3WXhSGPKCsO0MkSHMTzcKH3hc4dUUtAh2OWHYDZh6upkJGz9gUaEXbgxBunObUIMEpSwbKlhgNZIM_SjqdqSF-=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLXGvwud4bC6xFHuwy-pGJMy2DnKZvIoiAFO_eEK4A_ha7wY0UA7k4LNsVCuZujyjjvEkr5y_4xe7OBIuSxsyvW0-G8SC3dAAYO_mk0zXnJRj2Z8GC7752n8Bi_cBkpORBZpma3bV2KeITPZ8KBxhGwc=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLVxlyHH-pCC76DTtTdeOOXOgaiNWD3x7IwTdYXKBA1T2xRWbMxZ7W8LeU7es7J4WKf5cvbXZR_smLVm6dh799h5ccG5jo6QA-HHZk6jaCFq2sIeHN7gsZ2QD0kaEcqTgr514BmXAct1C8ogXDLZg1Rv=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLXQWseYcJ-pYB12GKvEpWW2MH6mPNQJ-Hji2VWmPcvkBPZBXz2lKd_pHbVWkILsF6h37qNJ4lJ4AuVSuW9gGV2oqjKVHNHeKblRxWCJJsLBkDe8RVMcvXwRw-WVBYYz85lFtrzVkrZRFWuPJnsLlAfs=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLW77GhYfgKJQ-Y7W4BM6bRLCrydbhHVLcFDQIYO3NmeNdsqhUNC2BPBNGUxzSP9ZeGMWsQB3S7MaXsItvgEwNicWVhAadsT5qmg3rWD-HBZLKQrWvc9dMv8JG-I7oWCIuF-h6GB1mq2T35MEmxoGQO-=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLUHtIwnQbnlexKx_yZLAuqzd7DKlNHdUQxaIet1pNGtYH5BnqY-HEiPUapL1kSSs4LxNLfa3znp3ZzJu5w1lpgag8FHqUT-b1r4fvFBeycv4IkKDE_o6dntdlR94ORuUQBA_fLywVNxn9KKGpK-AVRH=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLVnmVs0D8samJei9gp-aYKym2objKnbexydIdehnYSKjqNc4XM86QBaFsgXQ5VFSUMMzchbqbjh-j39zSTKJnxFMsz5bauyjubqJ0plVeU3BzRQdUE0n71Znq4wCAIc2_vslEYql6XDAAMreQEgZVoo=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLWt1QchEjRYGeQ7JLHikoCH8gk68bJykLGjhQSfqQ1nbN05jLOre3TAvclois1DBUW9kitOUCsM0tfRsrziXB1OrFo6X1JbgQ2M0tQbOgRcJG4ZtuhXlYdv3nltFuFf-iDHFg4wHSw5sM8qlNNIVTdb=w1024-h768-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLXh3pz40I8x6PtRij-jEJcnUvQjwb38JeT_66DWyfN3W2Pc8ZJikkcNqGIWjl76nMLzEaXtAexcLVM_hMGNTTZOFlTM8ZulUDtttz_8VFQo2J98teH1-NcCZ6DgId_CbYWJrWxYkAcxhoAsjB2ZYJhP=w1024-h764-no?authuser=0',
  ]
const bellagio_imgs = [
'https://lh3.googleusercontent.com/pw/AM-JKLV1nG8WutV4tKBOVcuexvuGKBP_QT00tnDHmGwDIPgrmJtsqyjszdpHdUXRSULR5-vshVVhRBe57TTHUxsYkTN_70cKbrlkCQuvn0569x19QNhwo4-42CaQzS_HzW0h86Ok_BknRI6cfEk_lvaU9Lw=w1744-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLVLZZ5pan7pOf5wt83YCJ8scvmfWKDRPPLaKjsLQ7QThIlV_SS6-Jf3P1xufwEjdGsqDNv_cwIWEhT90k-TyCFd_jEBHq_EHDI38aDCJkrfP_l1WcPXnri2yYYMgoL0QIqmX4nxIn5pnv7m_7Diu9k=w1744-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLWxFP88pNe7_oWrSUvU1A-JJO_clager01u-c4xg62rBjGDy_zmg5aNJIWs37L1Vxq7ZMqCnUclhlW-5ERbSZyFrTziAnxD148TNJToyvls4wtEU4ZslZfHcIF5KRbBwHgGo_JRAoPyDZJgq_L_Xtqf=w1744-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLWmldKzozlcSy7fkQaSkFS-LQYej7K3z0_UUcHsuwVgyJ1ds3DRjPXeFaRTfdK8fPm0RcDy9mHMC6JlFxxJze2hNA893oL4qm3Iiuv56S4njBwZIno19BVjTB3tLahPcw9D9xC4g17P5TrdWxa1Ofvf=w1744-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLV2m9_NjlErQKIiyKPEFauH8EFd7qwObWTaiR-6iU5KXmnqgKSEURsgNAqOwwiXfHqrcNaV0o7tBeeT3DQc5jXYaSDnipRfCvADLBrzXN5DL5V30vJpJusR-8-_awQjfEBKmX_Tsp4C6R7TesztCvsX=w1744-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLXCvcNeDW5XaI52r7wrDVS_cjWBcklRJxOJWe2r4IreCIGyJDbaE4AdyyO60f-VQIjd9C8dioNaFmtxi17i_w_JjEc9Ny3PlgzpVoswGZFI4CCJaXi5W703X_GjnX-x2v5DGLWuwKJQ7Lp1aMptiV2r=w1469-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLWksnuvO_X_H0FT16G7lvbNv0GcBR9-1edjOlaJQmg9WAdN1vAI6jhpM8P5HUN14Q6KNzToBWvN9grmMQLt3L4jfzlUjudbmxayXUSxgALtrMsaCh0t_xjAWDGUF2a4Mn88nuJr4p0_EvY1hCYeL_MN=w1469-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLVvQuepXMfeyy9RRkKGbwGMnoANhghBBSzpmPfeKOsNrP7_XbMJ-f1-E1hZFiFEPplFTYtyf2ifbA66DWB61FzzXK6tM9GQlpDbzQsgqwGmKANTDLexqhaRsOAfrIdMYdklencziGK1udpvIRdeeskv=w1469-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLX8pqdUdWy1nOCI6t7POJwgpPpc18t3--weR5854UsbeL9mzzT6Va2A3wOFV_GcuXyu4LjWvWiLKL-_Uv16-5oAkedRoQQUM8ZPRlvkgJlj3tvIjiRUzLF4kVv6LOu6PpQ1HKu4nc4iZbdwQUIccgud=w1469-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLXWHekfF1SDYJ219x4B3ZVQs15VD4MxAIgxnAWwY3uw5jygKiYGfclX2exGcK_B0J2pWgTsAga4b8OJHx2M_UgjvFWQO7DCPK5KMwX3xFbz5LP2HnW2AuKhrzE0FFyBcUdQ6J3mrLT2Yb0sWR4e_VHw=w1469-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLWQTGTdTg99oo5JNHtQ5EKcnLBW_RP2Wm5IBmPj6vpZEYQ5VRTF9tpfsyIdi1NSUr2L_wOIkNRh5WyCCHqsqg-FNXLp_LhMtD9E6Py2P3KxB8M-FHOLVX_-gCM_HoLCPiXLlbfxoQvWdhgpPNJeP6EB=w1469-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLVhZH5yqYZRA5saj98smLHRNg_cJj1Vtg3kaxpdTtVYLstoawaGPNmqG5Hw-5NVtSjJZoKuiFr_XhVBURTTTqws3aYzPV0HMhkxfFU8aeIzbVKNukmkOvlR7bqvoblcVrQ58Bo3t4EqmhFNXJebYfPh=w1469-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLVKmdvaoLTpGZ8mpln-8i3TWFgLZzA-8H5_pJSVI2lP9x2Kq-IKdIN4LAQKThEHjxNEb7Ea8z4p7j5c9m4Vg1fUKJAHjifP0WwhcHTv-YYNCqJeJAaLpmCPGmKDxY11lg4wsVlehrKyNVRYuECNF0Wh=w1469-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLVkG1UoG3zVQjhTiFPs5-ufnWjjewjkotG-OP8YRYsoypSFByTSYe9_Wi77VdhakvhJBHh8__-RwBvE1a4fr71F7TlIiQ3kjfrNA--oK4mp8Q-EnkGU-2UjDhNxeIDO7qwNBFHbWIUeow53WYQMNm3u=w1469-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLVL1-q7sTqxnzE76weNZ04L017hg0-smeh5DEiEf1ppBaydIkNc9TpppSlO_meC83tNaKfC5JdCMB4NKGe8n8gXLcb0Y6dZEydf_K0aTwb-hptNUw9uSMzx2eNLVfPp8OXhX370x6ou4n93vdlP_en5=w1469-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLX7FoqCBsL6LMMhu_dALqS6TcW_QSxn1BC94bJ3Kb6a_sArrl3WVKLNo8VhTEdXwF2LB5Y-omzMaFKFPGEjo2CEtSM_hNeMHeTJMyr_BqCkHcyFRWV3sTEn93KDDu1WnJgPC36Bs7bFEs7WPGuKajMW=w1469-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLWVJCOAdjDVOBnbfg9em7SJhk3BjAj3pdGSE5wr-as0xIT6-xe79Xdn8MFU4R0uu8D5q1Jdw9s6YEHvJy3a-6tU-SmvWmZxg6duQlafry7d9NaLuzIbIZK_Zjv5zCli6S0kPOHmaW407jTsPzxeQsp_=w1469-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLXQTrESWE2zBuCw_XaLl2hxjLveuKpIb-6vXLM9TlJbytygTCHqL4agj75ivnWlNZaPUYTEbaRRDzxfve6l8JTrDhXEPdxmEYuMdCoXH5ExYBjRKjJq5V6u9m-pquJwyDPQnk2jDIHMyp1eZ233akyB=w1469-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLVOJP3h1zBfrspltGSALoUU3uP0rv4LykAg6nN55myItf0WWhxrAH1whmBrNvsTDNticH3Mq_hC8zD-ruBWXRMPcDh3w1dgW6cpX4aLBCIOhiluCcOSlnnq8cLGIXAwkxIBXKrEdtgv_tOcbrxJ7ywg=w1469-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLXJxP7GvweAJjILxmorA4sHxUdYY4-D-rdYwSc4aiXC8yluLxv938ub8Nq44q4VXGTn_mw163789oRzXypFX3tD_jsJauLW59TIns7PCXu1GaIsyJByRjfHRE5YnYC3wZdzrdQVyzB_JU3n8C1K4d_6=w1469-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLWKff_3cZOoxx7rSjtUMkitedAbBokvLiL9Hc8S8QvOXTKDIDxzKSFytzyMW2TPKNw9cGuKs9JFQPpCRBr8YAliGJ087ck8vh9JROw-qMI4DUw8s0bIYbhSpZJHwvM-qtq89Lc7UWD96BzUnNT3Chwn=w1469-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLW8dgknjOgA7ZMIOpDEWQdOyorwmX0i88oztoBzfSEazBlE55bepbanqcD9Ojzs_zZHVK15Y0VTtKFJ9RA-6OUu1HNP7y9lcJeHss_-GHwmNZHkxJmDHzWUHBt50tZqbvinqzmn0qIu7YLCZLVGd4CX=w1469-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLVtWNKWDO-OCkaGxxAY5DIiFTUc8mW7WxaBkUu7puDEL_4-tBXwK7EC4FASeHRm315xk9vh8MpIc32xnCOwsW59xWKf9Dz-sn6ZLXjOigroZYNyF_NYDEkzHzHJLaicbBo1D0dEWPI5jjY4NAcmjRP0=w1469-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLW-P8b2qwnyoabwJ1nt6Lh0eVvPZNScjkXHpAv5_9n2P_fNBsiE2O85sakWnE3Vqymdf5mLh8gVxvgV09Ps1RsFgRVOy4OemyyTdvGZFqZfxvRqJXZqibCiBu_rY3liZBFisb6S-5w-xtnK-uamvjuY=w1469-h979-no?authuser=0',
'https://lh3.googleusercontent.com/pw/AM-JKLXUG0UgCz9we30ZfnjDd20iFMGP8yTd96WiPCMkfuHRY7qHDgc_3K8vflwTSS_dHBBGM3-YaBqDQcKDI8TxjjS_l6uPKSFV77Feu-zH2MyxmmCLAw0fv5FYsTSG1GS9Q-svpQgquQCxVa1YhuU-zIx7=w1469-h979-no?authuser=0',
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
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_cod05y1x.5yq.jpg',
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
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_c13tmotx.nwa.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_tgo0wiev.3pn.jpg',  
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_5g20bjgz.ton.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_xipizgww.00f.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_b4f1s5iu.30d.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_db4leu0r.uri.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_ztmn4rix.rha.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_0lyzb5yz.2n5.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_t0tsmfjv.otf.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_byk3kf0y.op3.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_k3xduejz.ikp.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_tegaglsg.rve.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_5lidtpah.jv4.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_3xpnvp3x.dhx.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_t51eqssn.2sn.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_ywl4k3px.u4c.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_vgwcfsnl.idm.jpg',
  'https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_qu4wtb11.nvt.jpg',
]

function SearchPageOLD_01() {
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

export default SearchPageOLD_01;
