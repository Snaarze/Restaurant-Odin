import { container } from "../index"
export const aboutDiv = () => {
    const div = document.createElement("div")
    div.classList.add("about-container")
    container.appendChild(div);

    const para = document.createElement("h1");
    para.textContent = "About us"
    para.classList.add("about-text")
    div.appendChild(para);

    const context = document.createElement("div")
    context.classList.add("context")
    div.appendChild(context)

    const about = document.createElement("h3");
    about.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet arcu justo. Ut facilisis dictum commodo. Mauris aliquam sollicitudin hendrerit. In quis tempus nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur mollis ipsum ac orci aliquet, eu ultricies nisl luctus. Aenean auctor ipsum sit amet nunc mattis lacinia. Aliquam dignissim facilisis metus ac mattis.

                        Ut vulputate facilisis tortor quis scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas nec turpis ut tortor pellentesque efficitur nec non est. Integer dapibus erat a magna viverra, in volutpat ipsum sagittis. Aliquam eu orci vitae nibh tristique pharetra sed sollicitudin magna. Fusce vitae consequat dolor. Aliquam consequat, felis ut sollicitudin rutrum, ex metus fringilla justo, a ullamcorper arcu tellus et quam. Vivamus in tempor nisl. Mauris convallis turpis tellus, a consectetur mauris pretium id. Praesent suscipit varius turpis sed dignissim. Integer aliquam ullamcorper vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse mattis nisl quis sodales posuere. Sed ut nibh aliquam, tincidunt ex a, egestas turpis. Integer eu feugiat tellus, in lobortis nunc.

                        Morbi vehicula porta turpis, sed aliquet lacus auctor quis. Sed placerat magna at metus convallis, ut tincidunt augue rutrum. Vestibulum pulvinar varius magna, id elementum leo lacinia sit amet. Ut finibus ultricies enim eget sollicitudin. Aliquam nec facilisis velit. Nulla cursus sit amet est eget auctor. Mauris sed imperdiet mi. Quisque interdum porta erat suscipit feugiat. Cras ultrices quis massa id tempus. Cras semper suscipit orci, ut faucibus ex blandit eget. Sed laoreet dapibus quam, nec sagittis arcu ultrices sit amet. Aliquam eget nulla dapibus, tempus magna vel, imperdiet ligula. Integer hendrerit eros vel augue dictum suscipit. Morbi facilisis magna arcu, eu dictum arcu lobortis id.

                        Phasellus ex diam, mattis ut nunc non, suscipit aliquam magna. Mauris tristique auctor arcu laoreet molestie. Donec feugiat nisl eget sollicitudin viverra. Suspendisse potenti. Vivamus eget eros lectus. Quisque eu turpis sed urna tincidunt tempor. Suspendisse potenti. In ex purus, sollicitudin id elit at, tempus dictum nulla. Morbi pulvinar euismod orci, vitae feugiat orci rutrum sed. Donec a sodales turpis, et vehicula orci. Nulla in eleifend lectus, eu laoreet augue. Sed convallis vehicula convallis. Curabitur sollicitudin mauris erat, sed sodales odio venenatis et. Ut commodo enim nec risus interdum faucibus.

                        Curabitur neque velit, tristique sit amet tellus eu, sodales porttitor purus. Pellentesque a enim nisl. Nam at interdum sem. Suspendisse consequat accumsan varius. Integer fermentum, lorem quis mollis luctus, sem neque luctus ante, eget ultrices justo tellus eget justo. Curabitur porta, augue nec dictum porttitor, risus enim blandit turpis, in commodo enim enim tincidunt tortor. Nunc eget pulvinar nibh, sed ultrices massa. Curabitur et lobortis lorem. Nulla varius nulla pulvinar, porta arcu sit amet, sodales velit.

                        Generated 5 paragraphs, 454 words, 3094 bytes of Lorem Ipsum`

    about.classList.add("about-info")
    context.appendChild(about)
}   