import React, { Component } from 'react';
import styles from './blog.module.css';

class Blog extends Component {

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.headerC}>
                    <img className={styles.header} src="https://hjmportfolio.s3-us-west-2.amazonaws.com/blog.png" alt="projects header"></img>
                </div>
                <article>
                    <img className={styles.blogImg} src="https://images.unsplash.com/photo-1592477725143-2e57dc728f0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1390&q=80" alt="Augmented Reality"/>
                    <h2>Building an Augmented Reality with React</h2>
                    <p className={styles.blogPost}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Id aliquet lectus proin nibh nisl condimentum id venenatis. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Urna neque viverra justo nec ultrices dui sapien. Eget nunc lobortis mattis aliquam faucibus purus in. Egestas maecenas pharetra convallis posuere morbi leo. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Nulla pellentesque dignissim enim sit. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Cursus metus aliquam eleifend mi. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Est sit amet facilisis magna etiam tempor. Quam adipiscing vitae proin sagittis.

                        Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Magna sit amet purus gravida quis blandit. Integer feugiat scelerisque varius morbi. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Et molestie ac feugiat sed. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. In vitae turpis massa sed elementum tempus. Aliquet enim tortor at auctor. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Augue eget arcu dictum varius duis at consectetur lorem. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Hac habitasse platea dictumst vestibulum rhoncus.

                        Gravida rutrum quisque non tellus orci ac. Vitae congue eu consequat ac. Donec et odio pellentesque diam volutpat commodo sed egestas. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Quis enim lobortis scelerisque fermentum dui faucibus in. In est ante in nibh mauris. Venenatis tellus in metus vulputate eu. Ultrices eros in cursus turpis massa tincidunt. Ipsum suspendisse ultrices gravida dictum fusce ut. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Risus sed vulputate odio ut enim blandit volutpat. Ut consequat semper viverra nam. Penatibus et magnis dis parturient. Aliquet nec ullamcorper sit amet risus. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Eget nulla facilisi etiam dignissim diam quis.

                        Eget nunc lobortis mattis aliquam faucibus purus in massa. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Risus commodo viverra maecenas accumsan. Sagittis vitae et leo duis ut diam quam nulla porttitor. Nulla facilisi nullam vehicula ipsum. Scelerisque in dictum non consectetur. At augue eget arcu dictum varius duis at consectetur lorem. Elit ullamcorper dignissim cras tincidunt. Ac auctor augue mauris augue neque gravida in fermentum et. Placerat vestibulum lectus mauris ultrices. Lacinia quis vel eros donec ac odio tempor orci. At tellus at urna condimentum. Magna eget est lorem ipsum dolor sit amet. Ut pharetra sit amet aliquam id diam maecenas ultricies. Aliquam ut porttitor leo a. Tristique sollicitudin nibh sit amet commodo nulla. Ipsum nunc aliquet bibendum enim. Felis eget velit aliquet sagittis id consectetur purus ut. Sem viverra aliquet eget sit.

                        Ac turpis egestas integer eget. Et netus et malesuada fames ac turpis egestas integer eget. Enim diam vulputate ut pharetra sit amet aliquam. Auctor urna nunc id cursus metus aliquam eleifend mi in. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Neque ornare aenean euismod elementum nisi quis eleifend quam. Leo duis ut diam quam nulla porttitor massa id. Pellentesque habitant morbi tristique senectus. Id donec ultrices tincidunt arcu non sodales neque. Mauris commodo quis imperdiet massa tincidunt nunc. Ut etiam sit amet nisl purus in mollis nunc. Quam vulputate dignissim suspendisse in. Platea dictumst vestibulum rhoncus est pellentesque elit. Auctor neque vitae tempus quam pellentesque. Bibendum enim facilisis gravida neque convallis a cras. Eget velit aliquet sagittis id consectetur purus. Aenean euismod elementum nisi quis eleifend. Imperdiet proin fermentum leo vel orci porta non pulvinar.
                    </p>
                </article>
            </div>
        );
    }
}

export default Blog;
