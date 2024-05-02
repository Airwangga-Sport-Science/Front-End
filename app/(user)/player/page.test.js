import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Index from './page';
import api from '@/utils/api';

jest.mock('@/utils/api', () => ({
  getPlayer: jest.fn(),
  getArticleByAttribute : jest.fn(),
  getAttributeMaster: jest.fn(),
  imageUrl: jest.fn(),
}));
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));
describe('Index Component', () => {
  beforeEach(() => {

    api.getPlayer.mockClear();
  });

  it('renders the Index component and loads player data', async () => {
    api.getPlayer.mockResolvedValue({
      "article": [
        {
          "latest_art1_id": null,
          "latest_art1_thumbnail": null,
          "latest_art1_title": null,
          "latest_art2_id": null,
          "latest_art2_thumbnail": null,
          "latest_art2_title": null,
          "latest_art3_id": null,
          "latest_art3_thumbnail": null,
          "latest_art3_title": null
        }
      ],
      "attribute": [
        {
          "attacking_crossing": 66,
          "attacking_finishing": 70,
          "attacking_heading_accuracy": 0,
          "attacking_short_passing": 0,
          "attacking_volleys": 90,
          "created_date": "Sat, 02 Mar 2024 09:32:42 GMT",
          "defending_marking_awareness": 0,
          "defending_sliding_tackle": 0,
          "defending_standing_tackle": 0,
          "height": 140.0,
          "id": 9,
          "latest_articles": {
            "latest_art1_id": null,
            "latest_art1_thumbnail": null,
            "latest_art1_title": null,
            "latest_art2_id": null,
            "latest_art2_thumbnail": null,
            "latest_art2_title": null,
            "latest_art3_id": null,
            "latest_art3_thumbnail": null,
            "latest_art3_title": null
          },
          "mentality_aggression": 86,
          "mentality_composure": 0.0,
          "mentality_interceptions": 66,
          "mentality_penalties": 69,
          "mentality_positioning": 81,
          "mentality_vision": 51,
          "movement_acceleration": 66,
          "movement_agility": 0,
          "movement_balance": 0,
          "movement_reactions": 0,
          "movement_sprint_speed": 41,
          "positions": {
            "name": "LW",
            "player_alike1": "Sergio Germ\u00e1n Romero",
            "player_alike2": "Claudio Andr\u00e9s Bravo Mu\u00f1oz",
            "player_alike3": "Andr\u00e9 Onana",
            "pos2.name": "CF",
            "pos3.name": "ST"
          },
          "power_jumping": 0,
          "power_long_shots": 77,
          "power_shot_power": 84,
          "power_stamina": 57,
          "power_strength": 47,
          "prefered_foot": "left",
          "skill_ball_control": 0,
          "skill_curve": 0,
          "skill_dribbling": 0,
          "skill_fk_accuracy": 0,
          "skill_long_passing": 0,
          "weight": 60.0
        }
      ],
      "player": {
        "birth_date": "Thu, 19 Oct 1978 00:00:00 GMT",
        "email": "bob@example.com",
        "id": 29,
        "name": "bob223",
        "password": "$2b$12$DtLIICp9B3JDULGbto.cxOk/F7tLLchlzgbGonPNbh1oI42L9m.iK",
        "phone": "082011633046",
        "role": 1,
        "status": 1,
        "thumbnail": "/uploads/17093593198224.png",
        "user_id": 29,
        "username": "user1"
      },
    });

    render(<Index />);




    await waitFor(() => {
      expect(api.getPlayer).toHaveBeenCalled();

    });


    expect(screen.getByText('Training Recommendation')).toBeInTheDocument();
    expect(screen.getByText('Player Statistic')).toBeInTheDocument();
    expect(screen.getByText('Height')).toBeInTheDocument();
  });

});
