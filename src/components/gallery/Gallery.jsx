import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

export const Gallery = () => {
    const girls = [
        {
            source: 'https://lh3.googleusercontent.com/MRe5AZXpNRk9iSIxncRTejqqDZEpLRpRbF7LGtw23Epa1xRDFMXcuWhiV2ULWOd2i56liGVYi2-VuPIRgSDXhfKHZgKCBszicEqDpowmlSZ-P5Uh7K0FWsnSp2bASgwngmiBVR_-bDJovgVqOm5nCRv20lL29tje-205mAN18ZOEjxHgo43OWKnTSIizBEkrtqke0FHiICcvZ3-jdioRO3Ep6U4t5rc72eF007237rI92dOuGlX2u0YMyRWVn5SGHTmZrwpC5VgpZlTgMSpTdFBgoDcqW1Cm0jc2KKDRdp2lb4qp2nRV2hV4x81iONj9vnz-1QfvUjLV8ZZ54aokkyzegucRGHOUBNnAADTKLcVFq0aMQtkB1SZPPuvaJ6EisPHb_-yIc7pZQ18wSeWohFXLwDWnmjvQyBglzrKVLsUIx8oG19RazDcyA-FdGplP369KfIC1-rRUPRdoJDJQt9I3YRFrh65hZPgoRHykktlWOOH_GpiOMyd_XzKd0heGINjA8QIgM8GR28TE-P7Pr_SRns9bFv68-q2pjGb583oETlXQTS9HmgJvtOBxBOvCCYr1qewGwU1d93GSC4axz5o1Cw8Dfdnu5eDxVLuotrx6H8388QJ_193hGQgZOHTrM7PwR0rAs4U7sQ3HnbenocBhr1dDMEZVag70fwCw9vuZKDnOtNdL22a5dROKu3ygCPPJfEW-e1b0I6UWuYSTGF4oKG_B_H-SECTceZnIBuIHaFEJhH6KIyZMCWDYj8IGUrMSwWJFwre_OtsRR8DWNXBBThxn9Crjo7-4OBkQl_wNqC_raqkXSs_KigpTXy5AjzSby6f2i_N3OZY2qIDhGsclC_ZHiD5d02c4aexpP6IAyruGQs5XWrQEhLqpkgG5tAw14l5EjGsv6QD_WyL0eS1GZUGGp7W8ACnutzvQJMurXwfd5g=w692-h923-s-no?authuser=0',
            itemId: 1,
        },
        {
            source: 'https://lh3.googleusercontent.com/C9lDwm1xO0SlhaLNGyBnwk1m5fETyk-ylGz2mccOKCdsKOBjIzPcAVF-B_x9S9jrHE_7527z9m6t_001MT1SlQVHzo5NHuI670tEjtbuopm08tfcs0WdJdNFyy5zbtU6GzRqENsaeF1QZIMG3IJXuhZ7M2-A1DeVbY7QteVMZtBXNECmllisXd6kXCxprSJKwv626kfj7s7vIVA-NF0dAzD1BUKnqQybARfwmN4uhO2pHWnFXrBed8JlwcUyY6FvRGKGVsN1oljo5AX8tW-rBF690Snds6m-0SHSQNnrhrnhbOAzP0ST8eU_FNqHQgGlsLh6Rp81Is3XqAywLfE8qYfmSC2W_exe0vx6qgUkDphL2eNIQketkKTjO_DRHSRcrnrWk4yA-QfT6_zfIWtjuEIdzsioQI2AGU9dhTPSYoSMBrHi8VxH2-LmFlc3b4-ymTb_e9TZBeNd9L4Na0b3rgZhvr1s6bHHSvpJpF1saJoZLxkYUej6nrFruIWf0PQ8_aJpbphuPrYASM03h7RhcL2Xo3Jfjc2CbHvzfhVRr3-_20PJeV-xxw12FFHZpfDRolTw8NcuiLLpgb9rIzsZ2LR8aP2jMBZNCow8Q-aidQbRYONhTsK_2OAEPkZOSf74VYWuEthe1qtDql1ip_2ergsjB18CwdSDjb6bB9zkIgn69oZwKoZnH0jSJ93S2gBgM0rEsHj6nc98KU1KQM58-Y6LBRfwkSEPr_AMCAIisKMaqr939zw4gkgoW50r6FE6hPxsLqOjKkC6hcNLv3koJgVYGfUd427m2PqDxvw0HeZgJ4ZnEPRZ6GHRSukASRL4Y7GMqlzZ8UWiVMzyGxqc8ukK1dkDofKeopL3m4-aSZeDGItaQb_SKCTMQQPnOc_JaX54qtBeWDwRutYNsk6OvAZl7V4B_oyObQBqAMkAKh9K_yUTdA=w692-h923-s-no?authuser=0',
            itemId: 2,
        },
        {
            source: 'https://lh3.googleusercontent.com/HMoAwQs7GkVFHryRLeW977vOph72sSc-ewibBWf7R9o_ty1cRtlaCiCLmP4S6N-VDkD0hmntgWFN3KgshIVdWPomhhfuSaIRQvagwL-QjUFdG1adA6xiLqMQyhcA-Y7O_OuWx3JvuSZ7x7ArwYOxPohcMcetBcWKRQFBx2Ka3qtXJezjYXzDqg3bcON6Xv0pr4TOIk2jrHDpmGFJND8eknrdte7ouDKz2S3uII_hrCTnJ-KXWrqaE9x3dRm9xHQPbj_ByJxIySESfl8uztVTJ5HU41JAtwFypaWEoqByPbj8DkyYT_hnze0VDSqtbmX3OKW5quQuSDFnZ5ZXUTXNeRyyln33Re9jbnnXUKr-4mbYJR9nn912--viXvRCcrcWYdg_uHEfh0CUQCjpS5vRB_ikuCss8YLuWuGfhO_QV_byuFVyryMYzVZJNZSNmVs5scmVp5iVM8l7x9lTV-dESjWZHR1YZj8_qI195bU6KTAQJHIjEjRHRNDweOyvxy9zrlAYaPkzTruPALBgALBOAHKIL8ib0ofDq7Leuk68_950ENV6xZYEkuHJY7ZmtM4ASl9OzzSUfyusJn2rDldLn5F4TACe9camtYDXEHS6r6-g3-2ubH-F11X9d_4RrRzKwDPDz7LNArXtap4fX_1sfNAtAMZJ9k2bgPeuQr_q7qnnHjXnDhfNvJtdcsASCpBNv8rJeAsQZVrBSk_nrYtwAJYABLvfI2Q1tp6vdvSZ7v95l6TKdE7LS974gltJbQiECLinXicWUho0fJoL0rpashCujhsmw-aWjVtHzPLlMgzOB9tWx9i1q5x80aX5xiz4hdCyfAvsy1iSDIQayLUEDU0I9jye_OvbaMraa3rSZeEhmkAya7xn_0J3Lax_DhtGlqoU8lWfDmU3RzIIyZlms9EN4JQADOcH92Ap54k51qZnTwV_1g=w692-h923-s-no?authuser=0',
            itemId: 3,
        },
        {
            source: 'https://lh3.googleusercontent.com/gmp0pqsxGu-6CjYluK-ju0s9MFoslpXFf5P0aKwE4A-JeTkfneDn90SmC0hJVLwZLPulGV-38Pua-d7Q-d81bibT0sCZ5pzj8XP0WNon2QbhBJAdrFu1I66iMMpepqg809uBmyjVOxsF1_21brtcSni0Pva8mbvbcO272VdEsaX0qA45s_sgCQkUlndJlRhxZodFbOLUdhCUySgCn0smvufYn_xh6HMAc5cXN9-PCpHWbFShTlyF9hwPXXb9-JiRV-zTaTOfmpI992Ei29AIi6JTqMpo08BO6tvqa7Rqb1-wy1NyKM9wTfTeEf9ljYYMz2WH_g0i4oAPcLUE5DqdS2JL-1R7fIzUmJkYB16cSVdczOCGR5i8Sr185ANl4Q4u6le92Dmr0Il2J0uSy_eAN8g0Yzp5xJLYQVAGcENQRFNQcHV2dnskc0JURMu3omYcNaQPjVuAR2r-JMDu27EMtpkjGqFB4h89OewqCM6ylUR2bd0d9sICK-BbfU26NY-Iie8DCRezER8S77B3KpP7I9731O_4GfccMX12bSKn1tcn_O43aeo8lH6ZvJcQxZ-qAE921PP6zp8mT6sMbL-98RM6Nb3ZGEfFaFsEvRZbmo5mf9CvqXwl2wTwX9_6bprdsHAYHxoKkaGnpod3n0elt9UWv2mQ4gszZsyqQM-jy29kT8x78ebsGSd1pX_Fi6J2_rZ9shoCPlx87C5LAz_-GxbqGcC-5jAwP08o8sMQniFhkDCmHXewJE7JpOf_IwTPbjRt3yNTu9beYV8Dl2wU3Qf4EEWvZtnu-AHlvZ1sLDUTNef3nc_bRBWFZ9jB2hm7wWYXnaLUmWLd3sUFslfPMYmCNWQJTViEF8QY3251ZfpkQ3ke0NfBJUlXU1O47WtNOTxlCkwfDqP1wPpxhm_lUg6AojhcaCgaQjMjuHc2YD0C8G8UVA=w838-h629-s-no?authuser=0',
            itemId: 4,
        },
        {
            source: 'https://lh3.googleusercontent.com/GvAEkZ1bg0vEYs5L09GpVrIrbfCIpZboIZXI4qxxuaUVnt3Tpcie63zWC3kbkogLebnU1ZkREEEMxWMdxaLdaILvE-emnIdjOeFsgk-oXHCSqvmKOHaa1JC_vkK496wTgjRRi8SrURuNwQuU4rPxhwl5ORl2Jucl1GnXbimElv8sxgfe-9q1-xUour30ZJ9kZn7KEBT84iyhvBqKBNX16tL7v5mYqvueDZ-8ev3sj7FnMPQHsCaKHGK_W3xeBA7tyaBcNKUPTQV_c4Ny69iuhLymk1IP96OUjrf_Mg5BUV4PDmYzZ30JWmzgefIgGPMBrHRhsbqdOKNvLwNRLhVxGcqfdszaiFfdhTK072jcosVDPh7nF6AHVeD3aHpf1LX2bN80AjEk23uli_pulGbTxV3dc1UN3uduAGv-mh4TKOa5BPFkZTZk9GrRpW3Kcyc1JMBhH00vhXUQu5QeE7CheKrctOleTsl2-TxkycWBrzxp1ik3TykuYS0x82wzv1oYec9jc0KWAirk4-iLpc-zgIla6UneYaMa22dsN-9ud-T0RWiWbH00B6w4Z4bQQjvqBNNPRdsVg2ybH7YOX098o7Pu1U8wEApzGFSKqQxYfZMmqfRceUvz5-1LAahgoD03mE8TGdMd2mrcNrbCL_RyhINfo54rrlspaHXjgN7YmBK_hl_Y5gGTRA886XauKFcbPE7o3MBDAk0iBUeGqCrF4p0wI3ydK8LuE9rONcpBf2q4bsu8vgXx6nr6nj9Dxbn8BOCCMtkJ-lOIts8GpJ3UvJmhu1jWxSicQPnpVXyNXDpam9UUp2Ue0tXkRqNmQr3yTYfZi9WcsCvAxl9opSW700DMV6PetHnr2Q24JzIxY9O1odtj0lvtkGylpAcAXS-0hkqoO_NpiSg6ssUJFsoXmkwCsR2cRUgKZeJ1KW--mqIYrmkBBQ=w692-h923-s-no?authuser=0',
            itemId: 5,
        },
    ];

    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <h1>
                    ~ Gallery ~
                </h1>
            </div>
            
            <MDBCarousel showControls fade dealy={1500} >
                {girls.map((item) => {
                    return (
                        <div className="d-flex justify-content-center w-50">
                            <MDBCarouselItem
                                className='w-100'
                                itemId={item.itemId}
                                src={item.source}
                                alt='...'
                            />
                        </div>
                    )
                })}
            </MDBCarousel>
            <div className="d-flex justify-content-center mt-4">
                <p>If you have any photos you would like to add, please send them to cjsand03@gmail.com</p>
            </div>
        </>
    );
}