import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'bw-card',
  styleUrl: 'bw-card.css',
  shadow: true,
})
export class BwCard {

  
  @State() setPopulate!:boolean;
  @State() setDescription!:string;

  tagColors = ["rgb(193, 31, 63)", "rgb(34, 64, 183)","rgb(203, 142, 10)", "rgb(25, 84, 33)", "rgb(191, 23, 221)"];

  @Prop() populate:boolean = true;

  @Prop() imgSrc!: string;
  @Prop() imgAlt!: string;
  @Prop() showBtn:boolean = true;
  
  @Prop() name!: string;
  
  @Prop() description!: string;
  @Prop() descriptionLength: number = 200;
  
  
  @Prop() tagTitle: string = 'Tags:';
  @Prop() tags!: string[];
  @Prop() link: string = '#';

  componentWillLoad() {
    // Updating the state
    this.setPopulate = this.populate;
    // Populating the props
    if(this.setPopulate){
      if(!this.imgSrc){
        this.imgSrc = 'https://images.pexels.com/photos/8162589/pexels-photo-8162589.jpeg?_gl=1*bpmwgc*_ga*OTY5NTU4NTMzLjE3ODc1MDcwMDk.*_ga_8JE65Q40S6*czE3ODc1MDcwMDkkbzEkZzEkdDE3ODc1MDcwNTkkajEwJGwwJGgw';
      }
      if(!this.imgAlt){
        this.imgAlt = 'Blackwall card image';
      }
      if(!this.name){
        this.name = 'Blackwall card';
      }
      if(!this.description){
        this.description = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. At eos animi impedit natus, non corrupti iste, voluptas ut asperiores saepe architecto veritatis quos doloribus inventore laudantium suscipit sequi? Laudantium, repellat!
          Architecto ex modi, sed non voluptatum ut iusto quaerat quia deserunt quibusdam. Ad voluptas exercitationem voluptatum labore expedita inventore, ea voluptate ut incidunt! Natus sed debitis quos amet atque laboriosam.
          Mollitia impedit recusandae, optio reprehenderit voluptates quidem dolorem non omnis rem nostrum sint odio ullam sequi animi quis dolor id voluptatum minima. Eveniet, alias possimus ab neque iste animi totam!
          Quod distinctio deserunt porro error quisquam sint iusto facilis dolore enim earum labore aspernatur sunt voluptate perferendis vero provident dolores nemo animi obcaecati, dicta ipsa blanditiis! At quam in nostrum.
          Enim quod, saepe tempore dolor quaerat atque vel mollitia aliquid delectus animi ratione magnam. Accusantium numquam asperiores sunt quo amet obcaecati cumque, mollitia, id illo quod, ea nobis tempora sequi.s`
      }
      if(!this.tags){
        this.tags = ['Fast', 'Junk','Heavy','Vegie Loaded'];
      }
    }
    if(this.description){
      // Updating the state
      this.setDescription = this.description;
      // Adjusting the length
      this.setDescription = this.setDescription.length > this.descriptionLength ? this.setDescription.substring(0, this.descriptionLength) + '...' : this.setDescription;
    }
  }

  getColorForTag(index:number): string {
    return this.tagColors[index % this.tagColors.length];
  }

  render() {
    return (
      <div class="card">
        <img src={this.imgSrc || ''} alt={this.imgAlt || ''} class="card-img" />
        <div class="card-content">
          <p class="card-title">{this.name || ""}</p>
          <div class="card-tags">
            <span class="card-tag-title">{this.tagTitle || ''}</span>
            {this.tags && this.tags.map((tag, index) => (
              <span class="card-tag" style={{ backgroundColor: this.getColorForTag(index) }}>{tag}</span>
            ))}
          </div>
          <p class="card-description">{this.setDescription || ''}</p>
          {this.showBtn  && <bw-btn name="Learn More" link={this.link || '#'}></bw-btn>}
        </div>
      </div>
    );
  }
}

