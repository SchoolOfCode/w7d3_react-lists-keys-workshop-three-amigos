import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const postTemplate = {
  postId: 0,
  title: "a title",
  date: "DD/MM/YY",
  author: "author",
  text: lorem.generateParagraphs(7),
  highlights: [
    lorem.generateWords(3),
    lorem.generateWords(3),
    lorem.generateWords(3),
  ],
  image: { link: "link", alt: "alt" },
};

const samplePosts = [
  {
    postId: 1,
    title: "One Of My Favourites",
    date: "12/10/20",
    author: "Bobby Nest",
    text: lorem.generateParagraphs(7),
    highlights: [
      lorem.generateWords(3),
      lorem.generateWords(3),
      lorem.generateWords(3),
    ],
    image: {
      link: "https://i.pinimg.com/originals/71/a0/5f/71a05f47b8f449fc231881416bf4bc66.jpg",
      alt: "A blue-grey pigeon turns to face the camera.",
    },
  },
  {
    postId: 2,
    title: "Look At This Marvellous Pigeon",
    date: "14/10/20",
    author: "Lucy Wing",
    text: lorem.generateParagraphs(7),
    highlights: [
      lorem.generateWords(3),
      lorem.generateWords(3),
      lorem.generateWords(3),
    ],
    image: {
      link: "https://i.redd.it/u6xrjmzbrf321.png",
      alt: "A close up shot of a pigeon with glorious ruffles.",
    },
  },
  {
    postId: 3,
    title: "A Lovely Pidgeon",
    date: "16/10/20",
    author: "Mohammad Feather",
    text: lorem.generateParagraphs(7),
    highlights: [
      lorem.generateWords(3),
      lorem.generateWords(3),
      lorem.generateWords(3),
    ],
    image: {
      link: "https://image.freepik.com/free-photo/pidgeon-waters-edge_19485-37038.jpg",
      alt: "A pigeon with a spectacular green plumage stares thoughtfully into the distance.",
    },
  },
  {
    postId: 4,
    title: "A hateful pigeon",
    date: "06/01/22",
    author: "Valerio and Austyn",
    text: lorem.generateParagraphs(7),
    highlights: [
      lorem.generateWords(3),
      lorem.generateWords(3),
      lorem.generateWords(3),
    ],
    image: {
      link: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRIVFRUYGBIREhgREhkREhISERgRGBQZGRgYGBgcIS4lHB4rIRgYJjgmLC8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGhESGjQhISE0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAD4QAAIBAwIDBgMFBwMDBQAAAAECAAMREgQhBTFBEyJRYXGBBjKRQqGxwdEjM1JicuHwgrLxFHPCJDRjkqL/xAAYAQEBAQEBAAAAAAAAAAAAAAABAAIDBP/EABwRAQEBAQEBAQEBAAAAAAAAAAABEQIhMUFhEv/aAAwDAQACEQMRAD8Ai7SpUS5hpJKU4yt2A0qEtLTk0SEUSOB4xYwxEgRJIWj4wtNLy4lISwMx0gGpzWq0hKVUWji0BEhwsEGhUaWE+MiYQGMRJBXjFoQpIlJIJqklTrXkWSMiWM1KzWggvIulpGm0m5maYFGIkhERLFocUkRItLElaIQYaEVo4NMywDCWTBsszjWgxSeMUUSrCiDJiDSGjASQglaTBji1K8UjeODAiI1pYSqJTJjXlKMWnqXlWqJJDIuZoYqs0dXjOsdFmaT9pCo8DiIWmIpYVLxGnCJHMcGgGnIFBLDQLTLRhETFeIyRxFlBx8pBOQaItBu0iVpIQBqSSvLRgjPaQ7YSFSV3moKt9oI8oXMUvEvkRBJMCK8w0QEmIymTEdGI2jgR7yQgUGEiYRpBhFI5Rs7yLCRAkk8I4ESrJhZJG0SiEwi7OCwg8IHMHjLem0TuVAFgerHEW8d4zfxXFcwbTTbhbl8EIc2uMbgH67Srq9G9M2dCp8xsfQ8jG82fRLPxVWStGAhFECEVjYw+MiUkgGkCIVxaC7QRwag1MxBbQvaSLNLFqN4xQRSaiSC7KKHtFBEIi0jeQLwIymTBgEaGWSTvEDFGJkkrxrRsosoozJEEkxJgQSASSxjkyBkk5ocL4Q9c93upexdvl9APtHyH3QHC9L2jhdyACxA2JA6A9Lm066hp3pu7BFVFpBEsbm432F7KL/XmZvnnfWeus8OvB6dBRgudVjbN7Fh4lQdhM/X/AA8zJU7KqQ1TvP2mLFm/qHKIV3roVdCr3Ni4Kgb7W5eU5rXcaNCquFXOwtUs16ZOO1lA3NxvbpOvxj3qtPSnUUVZqrgrRUooKi9rbEEf5aE4LrH1aPnbDdLknL1gtLxlNWrIybq1rghha1wTfceHKEqFdNSqMgAsCxsOvpHV/mzwDjHCuyCshuLDMdQeV/QmZBYy3wfUVKtRu0JweliwP8xupHtKrpa4PMGx9Zy65xuVEVIRXldkMkpMzqiVWUnlxjBGneWmxWDxFzLIpCM1KOjAVeGR5A0pJFgoLeKRig0YiQKQskqwQKrDLHIjgxwHIkGki0iTIhtEghMZBtos0VGhQ0omvaESreGGVaMiFkQ0Ppq4Rg7EDAgjLlcsAD7Xy9pSbcVrp+G6HsApcLmzAsSbFbr8vnb85sNX8D9JX0iFizNZkch0Jsb3Gx8oKvpnDFlfY9HtYD+W1vvvO+Z45f1z/GK9WpVtRRgynG7qxQi3MfZ+s5TjXw5WVmKqRmHW6cgG3upGwPkbT0pk23+6U9QHQMytv/NyA942bMa5t5uxwPwfwXUo+QDY7Bme63G9/XmLc/lE63iAxUq9sW28b+UvaTiJdCb5YA+Iuw8/0lPh+qYZ1Kq2JPOxsB4DyhjV6tupcJ0qN+0VhjYC4P8AD0Ai4rwxO+9NwW3Z0JGXiSv6SrxHsHLMlTs2dd+xvdiT8z257eU4XX0ezrZDUMTfY3Um3uPxlZKvfrpSYxlGnxJbAMbm1ywI2IFyGHjLitcXHI7j0nLrmwy6VpICRkgZknAkgI14spI5QSJSSBiMkHjGhLRSSIST7OJXETVIyC0JzKz1JaK3gnpx0YhRJJmjToiUqSWM0KbCZtMQejKVZTNJ2lZ1vMynGZ2e8sU0ljsxJBY6MRVZqcL01FzeoylUu9RWPQWIz8EFrm/MlR5Gkomy3YUaDOUDLs9QfM71rjBMftAHex8L9Jvie6Or46dHBAYciLja23SDrJkLA/SCRzVpnBsGK45Yhijfa2OxYbjyMC6Oq4sdr73IvboL+lvU3nZziL1Aptffl47yFVwQb8vLn/zHegdrC3Xl0mdQrFi2QIKMQAwAuBtfbpfqfAeMGhQqICBt18T7mY/GOIBBzPeOPhzmhrHKjK23dUep8vec5r6QqG7G++1uhG4MK6cyVW0ylmqNkcWbkNuQta46c/rLDUFIIZQQeeQBv63kdMgCgDlcn3LEmFZpyt9PVZGp4BRc3GSH/wCNrD6G4l/RafBAlyQuwJ5284UCGRZW1lEIYipltFjuojg/0p2jWhHEgDMkhGLSUiyyKOUUbGKSBDyQcyISTUS0YIhkyYyiOwgkbySmQMkJEQNGJjXjSxETHEaOIgRWFxflff0nWaHToi2UKCxZsrXJc3338AbTkDM8cUqVqblXKHRP2lUsL02xDhEAuMizNfw29J04Z6j0PT1lVExFwzYIC381sj59T4QhORJAvvt4WnOfCvaGlTeoSHNPug72SoygO3mwUH3J6mdBV1aKKYXdXZVp4nd2JN/UKATN4xKuLysTvtf+33zC41SL1aShgtNf2rgEBnqKf2SnyyBPt5zT1FNy1Jk3GbGpdrAAoQCB13sPec9xGolVHdz/AO1YtcmwZ8mVAR1UBg3kbRVrB0/FapWpmhdxqbKhtkoazKT44na3TbzmgiU1QMBZUYhtyft4kn3kNdU0tEnUC/a1aZrY3HeR0CnH/wCxa3rOc1+qqOy0USwFHKpsbvcZG1/Cx36kQsa5uOl1lMKQRyYX8rjqPu++VmEt1gaenJexIpgrsbjug7+tpmCtcBhyYAj0IvOfUytyjKsOglWnUllTMUwZXiaqIBjI2vGUXkqjwYeSdYMJeIFDyUdKEk1OFhiFoo1ooECSAkVkyZI4aEDSqXk0aCFYxKZEmMHE3GaKYxjZRrGWrDSWcW8VoWmQi85LhdSq79kBkj1MyHW6B3ARHe/2VJU262nTaqoFRmPID+0scUoKmkf5VraqouobYjBQFYCw3BAAUevrN8Rnqg6Ou+oNaiEcA1M9Qy/KoVFSkl+gAQt0vjbqZscC1CVar1jslBKeloLvdUCWZiPM5WPhfwmfotV/0+mq0OVS6HUHcFA63I9QmIt/ExmrpqFOlpanesXqPUdjbk7HFvTs1YgeBM6ObqqVRWJUWshHLkNgR+U5Pinw0D/1BaqFTUVckyOIT5zjvtzw+ktfDtVadCmga9R2R6mRuwHZU3I8gFKqPUS7qdTSqmpRdA6i+YI7vcVXP+8H2kvrheLaemKFBHObUEqEOmQViuC2B8MhbeFf4gQBG7AlnQKjAAm5IJTfcbXPmSZ0Oq1mkUBVKtiXAUEWBCsWH3mRc066PTpot0GQKquxt3bjzBuJGOJ1Wrrap77insNjbu8wTaWOHWVezLd8O2IItdee337R9NSFF3V0ZFW7XJOIsTdT4jcytrNaj1KbILYXuQLZNtY+dvzh1NjcbCLLAiZbevlyjEzg0RhqcCBJK1pEV1gUEdqkheUS7TEjWaVu1Mi1S8dSd4oLKKSNaMwhMZEiA0G0KixWhUEkG8HDsIFV3kl7R6fKXzpQBygNE9hLj1xaZ1Yza9MCV4XU1gTK6m5sOZNhbneMKhxpWamVQElrXAF+7cfmRMzgWsK1ldzkrZmoHvU5oSCRzsNvofGdO+grJ2eoQA5E0sKinEE5d7zuOUrcH0SadKjVqffIJTMG7r3e4gPmbenPYz0czI5W7W9wThydgH1KZHUVxXPabu7fYDdDu3I7fMeUyPjXWG608fnPbNvzOGCD+kDK3r5Tr6/EqTJ2bEdowCsq72JG4U+QJ3E53i/Dlr9pUJDNgQm+OICsUt6uQb+F5plyXDeJvRcsh7xHey3+yQD6i+01KHHcAwQL38r3c9aIQX6ndQfcRtN8I1XQlaimpjlgVIGRNiC1+np4eMpj4frZhGG5fs1t1OQBO/QX5ywZYucB4Wj0qrOVNRxim+6WJufcBrf0zp+DadNOhGV3NlJvc2VQoH3XnD1tN2faJdlrFjTFmKqRkAfUfMCfOA/9Rg13JBBuMr3C2O3rcQaka3xbxkEvSTvXBRjzC3vt63HtactodOS4y5bEDfx5e/5zUr93FcDti91sRgxYc/8AUPp5Q2npvnvjiL72sdrW9+Rk00NNqw7sq3KhEIO/MCxB9sZcIgKGqQBGCC1T9mTsCCTt94EsXnHqetRAtI3jPGUTJSvFJYxrSSMQiMQkkrxRWikhngi0my3gXuI2yjLD3hVgFaGRhMwpMkFjDZxmkSR7RPVJg7xxv6naWIPGanD1ooj1Kj98grTVVzI8WN9r9Be/U2mrwvgCqva6k4INwhOJP9R5j0G82tJpaTk4494bkhS+FtlVbWVd+t/znXnn9rHXX5HLcM4wahZGp1HHJAqUwqIOZvsb+e02dZw5Ky03QjujFBcWDdD5kbm36TI+NdNWorkmoYUmOOGYRr+HdAuPLeczoOOVrFN2Nr9y6mwHXEj+86Obq14BSzpipWF6e4QEK5J27xvuLdB4yHFPhumFZ6VRxWFM43fuuw2AYdTcqPYCUKfB9RqFzrOKSndCwvUuOWKruPKEPBNZiP2rMgFwAe9j5jny8+UTrl6fHa+nqEErdAUIte4AAG9/AC3rLqfFveywbIOCBfu433F/Sw9hCajghcWC98NZmIx2G1yPUmY+v4O9H+ZbXN+V72AHiZHwDimvaqyuwZb5kHne7k3HlYhfaDNcu/ccqt1FieoTc/cfqICrqC5YsDjuAByUkki3gATygSFy7pI32J29PTpJqRqslcmmoO+9rWAIQbfnJV8x3yGsHsyrtuGv77ACAp1aqgMr3x3GQB2tkfxP0htBqazOQwzDczbl3TYj2Bgi0FFy6K9wg76X8Qb/AFvN5Xvv/l+s53i/FGV1CgqyG+4258rdeX3ToKT5UqD9XpqWt1fqfvnPqeGHMmojLJ2nMpCRJkSY15JFjGEciNaBSvFGiihUeCrVRGtK9UGZytaktWFDwFISxjNRg6vC5SszgSVB8ydwFXdmPygfr5SXxb0ukeq4RFLMfoB4k9BOy4T8NrRIeowJUX22APv085zfCvi2hpu5gxDMLuLXI8SDv7eclx348pt3KSsVbZ3YFQB/KvMn6TrzzIx11b46Q0Kb1DUarnYHslqABA38WPUDw299pV1PFqOnVxSGdVrs7k3JN93d/XoPa0xOF6apqVRkGNNrMS/338Zd4twVVQ3qBaYOVRrd425WH5TYc3xCqrkuz5sx2u2Vr+X+WlXR0ERgxTtKhN0Tkl+l+p9Nh5y5p+EEsqpuX5X+a19r+HjOianQ0i7DOuFBc/Mygn7hzhBQeF6Kox7bVue78iA40VHRbD5vTltJ6apqdRqQ1MslJTYOw2Kgfw+B8/LlBcNV9aSWJFNW6bD+ke07KligCiwCqB7ARCnr+Hq4OYsxFiybXNuc5LivACveUlgOhNwZvVOPq9YUU7zFiCRuBa9/w++F0yuwqZiwD2T0AFz6XufeR15lqQUXArYm5KkXPeuL/wCeEyarIWOxG3pvv/adT8YcNcvkBcdD1xt4+05WpQA9RuwPP0k1K1UpqtNFB3XLLkbgmx+o5essaGsqbG1yCD162Amfw6mliW6WJ38De1vYTVfQo7gle7jf3IkWTX1aZuD3iwK2tccgVtL/AAuoQlNOavTLjwBV7Ee+f/5lbX8FVO8rbZcj9281dCmCInOyWv53Lbev5THXxoVZK8YiNOSPFHEYmSNJC0EWjO8ELtFKnax4JbEFUEnItEhA2id4nWBdCAWPyrzPryHrL2+H+rWg4e9d8U2A+ZjyA/X9DKfG9YiP2NEXVDgCbd5+RbzJNvu8Jr/CXGERdSKjhFGLLlYCxBDb2uSbLt6zkK5V3d1YkM7MDYqbA3ufDxnbnmcud61v67gJpoajvf8AgWxBJ239JHg+j02CPqGJdqopIgPeZmICi3Prz5Svq/iN69JLspqIve2xI3vy5dJR4fwipda5ONrOhvduexmp9H2PV21SUE2stNQFUDYDoLTlfiDiTuiMy2UvdKYNyR0J8zymZSr1tRVphmyRGsAbKo8WNudhf/DOw0vC6ZqU6rsCKa/s0P8AFcnJvMeEfrMmA0KT6agGKg6qooPiEFuX+dZTPD3wxBvUqMTUY8yxtz9J0CjtXc/YG1yNyf0i1NVKfzMAbXJJAAH+WhYZcWNEi6ekiAjuqFHQlv1mP8T8U7GixU/tHsg8mbn9BeUNNx9K9cKoY2Nk22Nhct5f2lH4v07sosxJ3KIFuFFgCxPt98RIqfC2qRGq13YBaa4rc7lm3NvHYffNrgnxIayaiu9kpI2KA88VUElj47iefaeiXdKKHd2s7c7L9o/S82zoKlZ0oJddHTC5kCykjvMb9SSdh7y0zl12q4lTA04c76lDjlt9i/X1E4fjuhIdmA2Jv5zU+INC2prUFD406XVfmG4Jt0Fgokde5Q4N3lxAyOxJt/n0kZHLUxcPcbgbTU4bqsjhcgtYA+Y3lp6CYZKOp89yLCA09MJiDbIuPW97/pJrFrjlMsllPeUD3N7/AJRtBqN0Um5xAJ877fnFq3yIC7m4ZvQEflJLRAFwAL1Fbz7rg/rM0yNOqkAJN6l4MGcRooSCeGBgahmrFqIWQenDJHeZKj2cUtYx4olMcysakbtZhod2ABJ2AFzOd1fGKhDopC06jhhcDK6gjY+5v4TotBw59WXpowGFjULXxseQ25nY/SbWo+EqOnoVXK9pVWme9U2VR1KpyFhc73nfjnJtcuutuPPwp7Iqty7vcj7WAG1/Pc/WSTFaRQmzi9/ME8r+8ahXCVMjuWDJ6XHT3AH1kH0jFgLEs5xUDmzfp5zVUY9UbkD6zs+Caus9BKfZZdmtlINv2YFhl4bfjN/g/wAH6d6S9ag+dyCRmR3gq+A6To+IUqWl0tQouyhQ5+2VLKpb2BvLBsc1wvRkXswzJLdALA7C3r+E2H0TAhi++OLAX2J52mAvEEGL03Rig74yFwPHnfneUq/EXd/mwABe1Njcg23PlKJ3SVMAFHh0nKcf4cdRUGL3IG4Pyrvtv1P6TZ4NUarTBdbLYAZcybc/OWKqou9gWHKw2EVPGNwfhY05Zibu+wsPlWD41rbLUWncu4ILnoLHYecvamqHJAa1gLgWvymFxrUUUuKlTHNSAFuWta1wADaFM9cxwDOpV7GntmbVKi3LLRB7+J6XFt/Sen6kApiDiAthbooFvwnHfC700RnRcEdrKz7uyja7Hpv0nRHXIyGzZAixsfY7iRcxxzioQ4Um74IzbY2AN8fU9fSUH4s9VWB3YHewsAttgPM7n2EnxnS0afK5a1wpbuqPE9Tcyh8PalcnuPme2/Le36SMnq/otcqKb/MvQ+MimtXIk2uN9/qf88pS4noHzZh1P+CT0ukUAFx8w2HtA40tJXBLOu5Y236cv7y6j3AHW4H3gmZ2kpBRdeW5I67bS5oBd/QZe9rfnM2tZ4vYyDQ5EE6TmyiKhjCLGSEkkDIM8TGQvKJLOKRyijg1XYS7wjSipUVCLrfveFpRqsACT08eUscK4/ToAnBmbqxxHsN9o88+6uq9OTCmtlVVVRyVQosPScR8T/FBZXpIoswKuSb93yk9Px19SlQMVRMDZVuzn1b8gJx+qQsxsLKD78+vnOtrnIBT1SUmRmTIkbi42vtdfO28u6bjFM1y+JUFMELEXBuNtuWwI/5mVxHTEWbx897yGh4az5Mdqacz4nwEmsesfD9a6U25Xy/3MJq6yklVHR91dSrePt5zjOCcVRKIVzj2YO7ciOfPxubTohqhiCp2IuPS0dZ+V57xH4XrUKhwcY3JVt7Y/wAw8fKW+G08K6ZAm64ObdOd/LpOj4rxJEXN9l5MbFgPM26TkeOfEiBCKDg1H2BX7K33J8/KFP136VQR3WBW3ScF8SfEGoo16iIUamwDLmpJAtvuCOonKaTiupTJUd7uTcAZEnxAI2PpNjU8BrGiKjkvVZi1QE3YXAsPO3hLTIxRrHd3dnYVHNy4YqT5bdP0i1tYE3uWNgOpvYW3JkhoKnIIx/0mOlLuG472W1/Dl+Yma1Isni1TBEVVugsLX58uX0lSjqayO1ndcjdhci58SJ0vA9LTFnYq1Rt132X0HjM74s1i3VVANRfma3Ifw+fj/wAxWMjVapiCCSST1JJLGb3BdAEtkbsd9uhM5IOWa5nY8KuiKWFtr97mNtveDXLaCX5znuMOwq5DYLsPS01F1wYm3ISrWrIxsdzfaGumaFT1F7AHc45DwB6TX0I2Zv4jYeg2mTpdB+0Jvcs3TkB/YToQgAAHICw9JnqjqZ4bKPeRxiKzOuWGMUXKK8Cg8E5hzIMIyjAMjFDYiKOrGfxD5feY+o6e8UU6cfGb9bXBenoPwMI3Iev5RRRTL4v1/wA8J0mq/dL6frFFH8qZeo/dD+ofnO1o/In/AG1/ARRSgqhxT91U/wC234TyhPmH9X5xRSpnxt8K/f8A+lv9rTsNH+6HqfwEUUJ9NJf8+s4nX/O39R/GKKNKfA/36eh/2mP8Zc6X+v8A8YooUz457Q/Ov9Y/ETsuIcl9D+UeKDXKnpeT+g/CR03ze/6RRQdY2dB85/pP4iaJiinOsd/SjmKKZc6E0YRRSR4MxRRJRRRSD//Z",
      alt: "A pigeon with a spectacular green plumage stares thoughtfully into the distance.",
    },
  },
];

export default samplePosts;
